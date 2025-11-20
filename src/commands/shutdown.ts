import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('[OWNER] Shut down the bot'),
    async execute(interaction) {
        const ownerId = process.env.OWNER_ID;
        
        if (interaction.user.id !== ownerId) {
            return interaction.reply({ content: '❌ Only the bot owner can use this command!', ephemeral: true });
        }
        
        await interaction.reply('👋 Shutting down... See you later bro!');
        console.log('Bot shutting down by owner command...');
        process.exit(0);
    }
};
