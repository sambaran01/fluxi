import { SlashCommandBuilder } from 'discord.js';
import { sleep } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('fakehack')
        .setDescription('Simulate hacking someone (just for fun!)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Target to "hack"')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        
        await interaction.reply(`🔴 Initiating hack on ${user}...`);
        await sleep(1500);
        
        await interaction.editReply(`🔴 Initiating hack on ${user}...\n🟡 Bypassing firewall...`);
        await sleep(1500);
        
        await interaction.editReply(`🔴 Initiating hack on ${user}...\n🟢 Bypassing firewall... SUCCESS\n🟡 Accessing mainframe...`);
        await sleep(1500);
        
        await interaction.editReply(`🔴 Initiating hack on ${user}...\n🟢 Bypassing firewall... SUCCESS\n🟢 Accessing mainframe... SUCCESS\n🟡 Downloading data...`);
        await sleep(2000);
        
        await interaction.editReply(
            `🔴 Initiating hack on ${user}...\n` +
            `🟢 Bypassing firewall... SUCCESS\n` +
            `🟢 Accessing mainframe... SUCCESS\n` +
            `🟢 Downloading data... SUCCESS\n\n` +
            `✅ Hack complete! Found:\n` +
            `• ${Math.floor(Math.random() * 1000)} cringe TikToks\n` +
            `• ${Math.floor(Math.random() * 50)} unread messages\n` +
            `• ${Math.floor(Math.random() * 100)} hours of Discord time\n` +
            `• Social security number: 123-45-6789 (jk we didn't find that)\n\n` +
            `💀 You've been hacked! (not really tho)`
        );
    }
};
