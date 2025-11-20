import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('[MOD] Delete multiple messages')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Number of messages to delete (1-100)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        
        try {
            const deleted = await interaction.channel.bulkDelete(amount, true);
            
            await interaction.reply({ 
                content: `✅ Successfully deleted ${deleted.size} message(s)!`,
                ephemeral: true 
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({ 
                content: '❌ Failed to delete messages. They might be older than 14 days.',
                ephemeral: true 
            });
        }
    }
};
