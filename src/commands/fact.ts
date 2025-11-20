import { SlashCommandBuilder } from 'discord.js';
import { facts, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Get a random interesting fact'),
    async execute(interaction) {
        const fact = randomChoice(facts);
        
        await interaction.reply(`🧠 **Random Fact:**\n${fact}`);
    }
};
