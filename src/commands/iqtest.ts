import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('iqtest')
        .setDescription('Test someone\'s IQ (totally scientific)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to test')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const iq = random(50, 200);
        
        let comment = '';
        if (iq >= 160) comment = 'GENIUS ALERT! 🧠💡';
        else if (iq >= 130) comment = 'Big brain energy fr';
        else if (iq >= 100) comment = 'Average enjoyer, respectable';
        else if (iq >= 80) comment = 'Room temperature IQ ngl';
        else comment = 'Bro... 💀';
        
        await interaction.reply(
            `🧠 ${user}'s IQ: **${iq}**\n${comment}`
        );
    }
};
