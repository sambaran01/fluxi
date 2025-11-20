import { SlashCommandBuilder } from 'discord.js';
import { random } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('guessnumber')
        .setDescription('Guess a number between 1 and 100'),
    async execute(interaction) {
        const target = random(1, 100);
        let attempts = 0;
        const maxAttempts = 7;
        
        await interaction.reply(`🎮 I'm thinking of a number between 1 and 100! You have ${maxAttempts} attempts. Reply with your guess!`);
        
        const filter = m => m.author.id === interaction.user.id && !isNaN(m.content);
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000, max: maxAttempts });
        
        collector.on('collect', m => {
            attempts++;
            const guess = parseInt(m.content);
            
            if (guess === target) {
                m.reply(`🎉 YES! It was **${target}**! You got it in ${attempts} attempt(s)! W gamer fr fr 🏆`);
                collector.stop();
            } else if (attempts >= maxAttempts) {
                m.reply(`❌ Out of attempts! The number was **${target}**. Better luck next time bro!`);
                collector.stop();
            } else if (guess < target) {
                m.reply(`📈 Higher! ${maxAttempts - attempts} attempts left.`);
            } else {
                m.reply(`📉 Lower! ${maxAttempts - attempts} attempts left.`);
            }
        });
        
        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                interaction.followUp(`⏱️ Time's up! The number was **${target}**. You took too long bro!`);
            }
        });
    }
};
