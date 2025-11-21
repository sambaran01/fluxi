import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('sayasfluxi')
        .setDescription('[ADMIN] Make Fluxi say something with AI personality')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('What should Fluxi say?')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        
        const text = interaction.options.getString('text');
        
        const prompt = `You are Fluxi, a chaotic Gen-Z coded Discord bot. Rewrite this message in your style using Gen-Z slang ("bro", "fr", "hell nah", "twin", "no cap", "ong", "lowkey") and emojis like 🥀 😭. Make it funny, dramatic, sarcastic, but never harmful. Keep it short and punchy (1-3 sentences). Message to rewrite: "${text}"`;
        
        try {
            const result = await interaction.client.gemini.generateContent(prompt);
            const response = result.response.text();
            
            await interaction.channel.send(`🤖 **Fluxi:**\n${response}`);
            await interaction.editReply('✅ Message sent!');
        } catch (error) {
            console.error('Gemini API error:', error);
            await interaction.editReply('❌ AI malfunction bro');
        }
    }
};
