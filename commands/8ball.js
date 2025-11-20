import { SlashCommandBuilder } from 'discord.js';
import { magicBall, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the magic 8-ball a question')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        ),
    async execute(interaction) {
        const question = interaction.options.getString('question');
        const answer = randomChoice(magicBall);
        
        await interaction.reply(
            `🎱 **Question:** ${question}\n**Answer:** ${answer}`
        );
    }
};
