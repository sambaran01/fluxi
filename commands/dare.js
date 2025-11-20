import { SlashCommandBuilder } from 'discord.js';
import { dareQuestions, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('dare')
        .setDescription('Get a dare challenge'),
    async execute(interaction) {
        const dare = randomChoice(dareQuestions);
        
        await interaction.reply(`😈 **Dare:** ${dare}`);
    }
};
