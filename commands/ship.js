import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Calculate love compatibility between two users')
        .addUserOption(option =>
            option.setName('user1')
                .setDescription('First person')
                .setRequired(true)
        )
        .addUserOption(option =>
            option.setName('user2')
                .setDescription('Second person')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user1 = interaction.options.getUser('user1');
        const user2 = interaction.options.getUser('user2');
        
        const compatibility = random(1, 100);
        
        let hearts = '';
        if (compatibility >= 80) hearts = '💖💖💖💖💖';
        else if (compatibility >= 60) hearts = '💖💖💖💖';
        else if (compatibility >= 40) hearts = '💖💖💖';
        else if (compatibility >= 20) hearts = '💖💖';
        else hearts = '💔';
        
        let verdict = '';
        if (compatibility >= 90) verdict = 'PERFECT MATCH! Wedding when? 💒';
        else if (compatibility >= 70) verdict = 'Strong connection ngl 💕';
        else if (compatibility >= 50) verdict = 'Could work with effort fr';
        else if (compatibility >= 30) verdict = 'Questionable chemistry...';
        else verdict = 'Absolutely NOT compatible 💀';
        
        await interaction.reply(
            `💘 **LOVE CALCULATOR**\n\n${user1} 💕 ${user2}\n\n` +
            `Compatibility: **${compatibility}%** ${hearts}\n${verdict}`
        );
    }
};
