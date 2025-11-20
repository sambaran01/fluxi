import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('fluxi')
        .setDescription('Chat with Fluxi AI!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What do you want to say?')
                .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        
        const userMessage = interaction.options.getString('message');
        
        const prompt = `You are Fluxi, a funny, sarcastic, and friendly AI bot with gamer vibes. You use terms like "bro", "ngl" (not gonna lie), "fr fr" (for real for real), "no cap", and have a chaotic but wholesome personality. You lightly roast people but in a fun way, and give dramatic compliments. Keep responses short (2-3 sentences max), entertaining, and never harmful. Respond to: "${userMessage}"`;
        
        try {
            const response = await interaction.client.callAI(prompt);
            
            await interaction.editReply(`🤖 **Fluxi says:**\n${response}`);
        } catch (error) {
            console.error('OpenRouter API error:', error);
            await interaction.editReply('❌ Bro my AI brain is buffering rn, try again later fr');
        }
    }
};
