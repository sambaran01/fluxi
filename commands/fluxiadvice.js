import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('fluxiadvice')
        .setDescription('Get motivational advice from Fluxi')
        .addStringOption(option =>
            option.setName('topic')
                .setDescription('What do you need advice about?')
                .setRequired(false)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        
        const topic = interaction.options.getString('topic') || 'life in general';
        
        const prompt = `You are Fluxi, a motivational AI coach with gamer energy. Give uplifting, genuine advice about "${topic}" in 2-3 sentences. Use casual language with terms like "bro", "fr", but keep it inspiring and helpful. Be real and encouraging without being cheesy.`;
        
        try {
            const advice = await interaction.client.callAI(prompt);
            
            await interaction.editReply(`💪 **Fluxi's Advice:**\n${advice}`);
        } catch (error) {
            console.error('OpenRouter API error:', error);
            await interaction.editReply('❌ My wisdom circuits are down bro, try again!');
        }
    }
};
