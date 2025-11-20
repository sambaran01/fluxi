import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get information about a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to get info about')
                .setRequired(false)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const member = interaction.guild.members.cache.get(user.id);
        
        const joinedAt = member?.joinedAt ? `<t:${Math.floor(member.joinedAt.getTime() / 1000)}:R>` : 'Unknown';
        const createdAt = `<t:${Math.floor(user.createdAt.getTime() / 1000)}:R>`;
        
        const roles = member?.roles.cache
            .filter(role => role.id !== interaction.guild.id)
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, 10)
            .join(', ') || 'None';
        
        await interaction.reply({
            embeds: [{
                color: 0x5865F2,
                title: `${user.tag}`,
                thumbnail: { url: user.displayAvatarURL({ size: 256 }) },
                fields: [
                    { name: '👤 Username', value: user.tag, inline: true },
                    { name: '🆔 ID', value: user.id, inline: true },
                    { name: '📅 Account Created', value: createdAt, inline: true },
                    { name: '📥 Joined Server', value: joinedAt, inline: true },
                    { name: '🎭 Roles', value: roles, inline: false }
                ],
                footer: { text: 'Fluxi Bot • User Info' },
                timestamp: new Date()
            }]
        });
    }
};
