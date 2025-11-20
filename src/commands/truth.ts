import { SlashCommandBuilder } from 'discord.js';
import { truthQuestions, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('truth')
        .setDescription('Get a truth question'),
    async execute(interaction) {
        const question = randomChoice(truthQuestions);
        
        await interaction.reply(`🤔 **Truth:** ${question}`);
    }
};
