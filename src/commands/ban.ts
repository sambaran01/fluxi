import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('[MOD] Ban a member from the server')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to ban')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for ban')
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const member = interaction.guild.members.cache.get(user.id);
        
        if (member && !member.bannable) {
            return interaction.reply({ content: '❌ I cannot ban this user!', ephemeral: true });
        }
        
        try {
            await interaction.guild.members.ban(user, { reason });
            await interaction.reply(`🔨 Banned ${user.tag}\n**Reason:** ${reason}`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ Failed to ban user!', ephemeral: true });
        }
    }
};
