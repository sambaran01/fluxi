import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get someone\'s avatar')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to get avatar from')
                .setRequired(false)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        
        await interaction.reply({
            embeds: [{
                color: 0x5865F2,
                title: `${user.tag}'s Avatar`,
                image: { url: user.displayAvatarURL({ size: 1024, dynamic: true }) },
                description: `[Download Link](${user.displayAvatarURL({ size: 1024, dynamic: true })})`,
                footer: { text: 'Fluxi Bot' }
            }]
        });
    }
};
