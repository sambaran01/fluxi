import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get information about this server'),
    async execute(interaction) {
        const guild = interaction.guild;
        
        const createdAt = `<t:${Math.floor(guild.createdAt.getTime() / 1000)}:R>`;
        const owner = await guild.fetchOwner();
        
        await interaction.reply({
            embeds: [{
                color: 0x5865F2,
                title: guild.name,
                thumbnail: { url: guild.iconURL({ size: 256 }) },
                fields: [
                    { name: '🆔 Server ID', value: guild.id, inline: true },
                    { name: '👑 Owner', value: owner.user.tag, inline: true },
                    { name: '📅 Created', value: createdAt, inline: true },
                    { name: '👥 Members', value: guild.memberCount.toString(), inline: true },
                    { name: '💬 Channels', value: guild.channels.cache.size.toString(), inline: true },
                    { name: '🎭 Roles', value: guild.roles.cache.size.toString(), inline: true },
                    { name: '😀 Emojis', value: guild.emojis.cache.size.toString(), inline: true },
                    { name: '🚀 Boost Level', value: `Tier ${guild.premiumTier}`, inline: true },
                ],
                footer: { text: 'Fluxi Bot • Server Info' },
                timestamp: new Date()
            }]
        });
    }
};
