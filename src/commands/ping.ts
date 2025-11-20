import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check bot latency and API response time'),
    async execute(interaction: ChatInputCommandInteraction) {
        const sent = await interaction.reply({ 
            content: '🏓 Pinging...', 
            fetchReply: true 
        });
        
        const latency = sent.createdTimestamp - interaction.createdTimestamp;
        const apiLatency = Math.round(interaction.client.ws.ping);
        
        let latencyEmoji = '🟢';
        if (latency > 200 || apiLatency > 200) latencyEmoji = '🟡';
        if (latency > 500 || apiLatency > 500) latencyEmoji = '🔴';
        
        await interaction.editReply(
            `${latencyEmoji} **Pong!**\n\n` +
            `📡 **Bot Latency:** ${latency}ms\n` +
            `💓 **API Latency:** ${apiLatency}ms\n` +
            `⏱️ **Uptime:** ${formatUptime(interaction.client.uptime!)}`
        );
    }
};

function formatUptime(ms: number): string {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
}
