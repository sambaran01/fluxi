import { SlashCommandBuilder } from 'discord.js';
import { roasts, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('roast')
        .setDescription('Roast someone (all in good fun!)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to roast')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const roast = randomChoice(roasts);
        
        await interaction.reply(
            `🔥 ${user} ${roast}`
        );
    }
};
