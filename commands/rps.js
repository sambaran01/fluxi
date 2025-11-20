import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play rock paper scissors with the bot')
        .addStringOption(option =>
            option.setName('choice')
                .setDescription('Your choice')
                .setRequired(true)
                .addChoices(
                    { name: '🪨 Rock', value: 'rock' },
                    { name: '📄 Paper', value: 'paper' },
                    { name: '✂️ Scissors', value: 'scissors' }
                )
        ),
    async execute(interaction) {
        const userChoice = interaction.options.getString('choice');
        const choices = ['rock', 'paper', 'scissors'];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];
        
        const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
        
        let result;
        if (userChoice === botChoice) {
            result = "It's a tie! We're equally matched ngl";
        } else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = "You won! GG bro 🎉";
        } else {
            result = "I won! Better luck next time fr 😎";
        }
        
        await interaction.reply(
            `You chose: ${emojis[userChoice]}\nI chose: ${emojis[botChoice]}\n\n**${result}**`
        );
    }
};
