import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('rate')
        .setDescription('Rate someone out of 100%')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to rate')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const rating = random(1, 100);
        
        let reaction = '';
        if (rating >= 90) reaction = 'SHEEEESH 🔥';
        else if (rating >= 70) reaction = 'Pretty solid ngl';
        else if (rating >= 50) reaction = 'Mid energy fr';
        else if (rating >= 30) reaction = 'Yikes bro...';
        else reaction = 'Absolutely cooked 💀';
        
        await interaction.reply(
            `📊 I rate ${user} a **${rating}/100**\n${reaction}`
        );
    }
};
