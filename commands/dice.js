import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('Roll a dice (1-6)'),
    async execute(interaction) {
        const roll = random(1, 6);
        const emojis = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        
        await interaction.reply(`🎲 You rolled: **${roll}** ${emojis[roll]}`);
    }
};
