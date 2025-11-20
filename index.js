import { Client, GatewayIntentBits, Collection, REST, Routes } from 'discord.js';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Initialize Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
});

// OpenRouter AI helper function
async function callOpenRouter(prompt) {
    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
        model: 'x-ai/grok-4.1-fast',
        messages: [{ role: 'user', content: prompt }]
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data.choices[0].message.content;
}

// Store OpenRouter function on client for commands to access
client.callAI = callOpenRouter;
client.commands = new Collection();

// Load commands
const commandsPath = path.join(process.cwd(), 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(`file://${filePath}`);

    if (command.default?.data && command.default?.execute) {
        client.commands.set(command.default.data.name, command.default);
        commands.push(command.default.data.toJSON());
        console.log(`✓ Loaded command: ${command.default.data.name}`);
    }
}

// Register slash commands
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
    console.log('🔄 Refreshing application (/) commands...');
    
    // Use guild commands for instant deployment (or global for all servers)
    const route = process.env.GUILD_ID 
        ? Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID)
        : Routes.applicationCommands(process.env.CLIENT_ID);
    
    await rest.put(route, { body: commands });
    
    console.log(`✓ Successfully registered ${commands.length} application commands!`);
} catch (error) {
    console.error('Error registering commands:', error);
}

// Handle interactions
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Error executing ${interaction.commandName}:`, error);
        const reply = { content: '❌ There was an error executing this command!', ephemeral: true };       

        if (interaction.deferred || interaction.replied) {
            await interaction.editReply(reply).catch(() => {});
        } else {
            await interaction.reply(reply).catch(() => {});
        }
    }
});

// Handle mentions and messages (AI Chat Feature)
client.on('messageCreate', async (message) => {
    // Ignore bot messages and messages without mentions
    if (message.author.bot) return;
    
    // Check if bot was mentioned
    if (!message.mentions.has(client.user.id)) return;

    try {
        // Show typing indicator
        await message.channel.sendTyping();

        // Extract the message content without the mention
        let userMessage = message.content
            .replace(/<@!?>/g, '') // Remove bot mention
            .trim();

        // If empty message after removing mention
        if (!userMessage) {
            return message.reply('Hey! You mentioned me but didn\'t say anything. Ask me a question or just chat with me! 💬\n\nTry: /help to see all my commands!');
        }

        // Generate AI response with OpenRouter
        const prompt = `You are Fluxi Bot, a fun, friendly, and slightly sassy Discord bot with personality. 
You help people, answer questions, tell jokes, and chat casually.

Someone just asked you: "${userMessage}"

Respond in a casual, engaging way. Keep it conversational and fun. Use emojis occasionally but don't overdo it.
If they ask about your capabilities, mention you have fun commands like /rate, /roast, /ship, games, moderation tools, and can chat anytime they mention you.
Keep responses under 1900 characters (Discord limit is 2000).`;

        const response = await callOpenRouter(prompt);

        // Split response if it's too long (Discord has 2000 char limit)
        if (response.length > 2000) {
            const chunks = response.match(/[\s\S]{1,1990}/g) || [];
            for (const chunk of chunks) {
                await message.reply(chunk);
            }
        } else {
            await message.reply(response);
        }

    } catch (error) {
        console.error('Error in AI chat:', error);
        await message.reply('Oops! My AI brain had a hiccup 🤖💭 Try mentioning me again, or use /fluxi command instead!');
    }
});

// Bot ready event
client.once('ready', () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🤖 Fluxi Bot is ONLINE!`);
    console.log(`📛 Logged in as: ${client.user.tag}`);
    console.log(`🎮 Serving ${client.guilds.cache.size} server(s)`);
    console.log(`🧠 AI powered by Grok via OpenRouter`);
    console.log(`💬 Mention me anywhere to chat!`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Set bot status
    client.user.setActivity('with your feelings 😎', { type: 'PLAYING' });
});

// Login
client.login(process.env.DISCORD_TOKEN);
