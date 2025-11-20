import { SlashCommandBuilder, PermissionFlagsBits, ActivityType } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('[ADMIN] Change bot status')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('Status text')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Activity type')
                .setRequired(false)
                .addChoices(
                    { name: 'Playing', value: 'playing' },
                    { name: 'Watching', value: 'watching' },
                    { name: 'Listening', value: 'listening' },
                    { name: 'Competing', value: 'competing' }
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const text = interaction.options.getString('text');
        const type = interaction.options.getString('type') || 'playing';
        
        const activityTypes = {
            playing: ActivityType.Playing,
            watching: ActivityType.Watching,
            listening: ActivityType.Listening,
            competing: ActivityType.Competing
        };
        
        interaction.client.user.setActivity(text, { type: activityTypes[type] });
        
        await interaction.reply({ content: `✅ Status changed to: ${type} ${text}`, ephemeral: true });
    }
};
