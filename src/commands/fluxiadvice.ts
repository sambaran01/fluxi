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
        
        const prompt = `You are Fluxi, a chaotic Gen-Z motivational friend who gives real advice. Give uplifting, genuine advice about "${topic}" in 2-3 sentences max. Use Gen-Z slang like "bro", "fr", "no cap", "lowkey" naturally. Use emojis like 🥀 or 😭 if it fits the vibe. Be real, encouraging, and authentic — no corporate motivational poster energy. Keep it helpful but make it sound like advice from a homie who genuinely cares.`;
        
        try {
            const advice = await interaction.client.callAI(prompt);
            
            await interaction.editReply(`💪 **Fluxi's Advice:**\n${advice}`);
        } catch (error) {
            console.error('OpenRouter API error:', error);
            await interaction.editReply('❌ My wisdom circuits are down bro, try again!');
        }
    }
};
