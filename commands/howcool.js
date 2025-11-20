import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('howcool')
        .setDescription('Rate someone\'s coolness level')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to rate')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const coolness = random(1, 100);
        
        let verdict = '';
        if (coolness >= 90) verdict = 'Absolutely legendary, built different fr 😎🔥';
        else if (coolness >= 75) verdict = 'Pretty cool ngl, main character energy';
        else if (coolness >= 50) verdict = 'Decent vibes, respectable';
        else if (coolness >= 25) verdict = 'Room temperature cool at best';
        else verdict = 'Ice cold... but in a bad way 💀';
        
        await interaction.reply(
            `❄️ ${user}'s coolness: **${coolness}%**\n${verdict}`
        );
    }
};
