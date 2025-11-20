import { SlashCommandBuilder } from 'discord.js';
import { compliments, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('compliment')
        .setDescription('Give someone a wholesome compliment')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to compliment')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const compliment = randomChoice(compliments);
        
        await interaction.reply(
            `✨ ${user} ${compliment}`
        );
    }
};
