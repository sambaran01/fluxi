import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('whowouldwin')
        .setDescription('Epic battle between two users')
        .addUserOption(option =>
            option.setName('user1')
                .setDescription('First fighter')
                .setRequired(true)
        )
        .addUserOption(option =>
            option.setName('user2')
                .setDescription('Second fighter')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user1 = interaction.options.getUser('user1');
        const user2 = interaction.options.getUser('user2');
        
        const winner = Math.random() < 0.5 ? user1 : user2;
        const winChance = random(55, 99);
        
        const battleMoves = [
            'landed a devastating combo',
            'pulled out the ultra instinct',
            'used pocket sand (very effective)',
            'summoned their stand',
            'activated their trap card',
            'hit them with the "no u"',
            'used the power of friendship'
        ];
        
        const move = battleMoves[Math.floor(Math.random() * battleMoves.length)];
        
        await interaction.reply(
            `⚔️ **EPIC BATTLE**\n\n${user1} 🆚 ${user2}\n\n` +
            `After an intense fight, **${winner}** wins with ${winChance}% HP remaining!\n` +
            `Final move: ${move} 💥`
        );
    }
};
