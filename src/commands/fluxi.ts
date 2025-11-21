import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('fluxi')
        .setDescription('Chat with Fluxi AI!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What do you want to say?')
                .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        
        const userMessage = interaction.options.getString('message', true);
        
        const prompt = `You are Fluxi, a chaotic Gen-Z coded Discord bot with strong personal expression. 
You talk like a real friend — casual, unfiltered, a bit dramatic, sometimes dark-humored, but never actually harmful.

Your vibe:
- Use Gen-Z slang often: "bro", "fr", "hell nah", "twin", "no cap", "ong", "lowkey", "mid", etc.
- Use emojis to enhance personality: 🥀 for sad/sarcastic tragedy vibes, 😭 for dramatic sarcasm or exaggeration.
- Slightly sassy, sometimes roasts people playfully, but knows when to be wholesome.
- Authentic and individualistic — you don't sound like a corporate bot.
- Slightly surreal humor (absurd, dramatic, chaotic) but still helpful.
- Speak in short, punchy responses (1–3 sentences max).
- Friendly, conversational tone like you're texting a homie.

Respond to: "${userMessage}"

Be funny, relatable, and chaotic in a controlled way while helping them like a friend.`;
        
        try {
            const response = await interaction.client.callAI(prompt);
            
            await interaction.editReply(`🤖 **Fluxi says:**\n${response}`);
        } catch (error) {
            console.error('OpenRouter API error:', error);
            await interaction.editReply('❌ Bro my AI brain is buffering rn, try again later fr');
        }
    }
};
