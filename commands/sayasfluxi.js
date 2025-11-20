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
        
        const prompt = `You are Fluxi, a powerful AI with gamer energy and chaotic personality. Rewrite this message in your style (funny, sarcastic, use "bro", "fr", "ngl"). Keep it entertaining: "${text}"`;
        
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
