import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands and bot information');

export async function execute(interaction) {
    const helpEmbed = new EmbedBuilder()
        .setColor('#FF6B9D')
        .setTitle('🤖 Fluxi Bot - Command Guide')
        .setDescription('**Tip:** You can also mention me (@Fluxi Bot) in any channel and ask me anything! I\'ll respond using AI. 💬')
        .addFields(
            {
                name: '🎭 Fun Commands',
                value: '`/rate` - Rate someone or something\n' +
                       '`/roast` - Roast a user\n' +
                       '`/compliment` - Compliment a user\n' +
                       '`/ship` - Calculate compatibility between two users\n' +
                       '`/8ball` - Ask the magic 8-ball\n' +
                       '`/fact` - Get a random fun fact\n' +
                       '`/coinflip` - Flip a coin\n' +
                       '`/roll` - Roll dice',
                inline: false
            },
            {
                name: '🎮 Games',
                value: '`/rps` - Play Rock Paper Scissors\n' +
                       '`/guessnumber` - Guess the number game\n' +
                       '`/slot` - Spin the slot machine\n' +
                       '`/trivia` - Answer trivia questions',
                inline: false
            },
            {
                name: '🤖 AI Commands (Powered by Grok)',
                value: '`/fluxi` - Chat with Fluxi AI\n' +
                       '`/fluxiadvice` - Get AI advice on any topic\n' +
                       '`/sayasfluxi` - Let Fluxi say something\n' +
                       '**@mention me** - Ping me anywhere to chat!',
                inline: false
            },
            {
                name: '🛡️ Moderation',
                value: '`/kick` - Kick a user from the server\n' +
                       '`/ban` - Ban a user from the server\n' +
                       '`/unban` - Unban a user\n' +
                       '`/timeout` - Timeout a user\n' +
                       '`/warn` - Warn a user\n' +
                       '`/clear` - Clear messages in bulk',
                inline: false
            },
            {
                name: '⚙️ Admin Commands',
                value: '`/announce` - Send an announcement\n' +
                       '`/setnickname` - Change a user\'s nickname\n' +
                       '`/lock` - Lock a channel\n' +
                       '`/unlock` - Unlock a channel',
                inline: false
            },
            {
                name: '📊 Utility',
                value: '`/ping` - Check bot latency\n' +
                       '`/serverinfo` - Get server information\n' +
                       '`/userinfo` - Get user information\n' +
                       '`/avatar` - Get user\'s avatar\n' +
                       '`/botinfo` - Get bot information\n' +
                       '`/help` - Show this message',
                inline: false
            },
            {
                name: '💬 Chat with Me!',
                value: 'Just **mention me** in any message like:\n' +
                       '`@Fluxi Bot tell me a joke`\n' +
                       '`@Fluxi Bot what do you think about pizza?`\n' +
                       'I\'ll respond with AI-powered answers! 🧠✨',
                inline: false
            }
        )
        .setFooter({ text: 'Fluxi Bot • Made with ❤️ using discord.js & Grok AI' })
        .setTimestamp();

    await interaction.reply({ embeds: [helpEmbed] });
}
