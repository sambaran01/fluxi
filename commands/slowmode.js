import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('slowmode')
        .setDescription('[MOD] Set slowmode for this channel')
        .addIntegerOption(option =>
            option.setName('seconds')
                .setDescription('Slowmode duration in seconds (0 to disable)')
                .setRequired(true)
                .setMinValue(0)
                .setMaxValue(21600)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction) {
        const seconds = interaction.options.getInteger('seconds');
        
        try {
            await interaction.channel.setRateLimitPerUser(seconds);
            
            if (seconds === 0) {
                await interaction.reply('✅ Slowmode disabled!');
            } else {
                await interaction.reply(`✅ Slowmode set to ${seconds} second(s)!`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ Failed to set slowmode!', ephemeral: true });
        }
    }
};
