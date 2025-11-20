import { SlashCommandBuilder } from 'discord.js';
import { slotEmojis, randomChoice } from '../utils/helpers.js';

export default {
    data: new SlashCommandBuilder()
        .setName('slot')
        .setDescription('Try your luck at the slot machine!'),
    async execute(interaction) {
        const slot1 = randomChoice(slotEmojis);
        const slot2 = randomChoice(slotEmojis);
        const slot3 = randomChoice(slotEmojis);
        
        let result;
        if (slot1 === slot2 && slot2 === slot3) {
            result = slot1 === '💎' ? 
                '🎰 **JACKPOT!!!** THREE DIAMONDS! You\'re rich bro! 💰💰💰' :
                slot1 === '7️⃣' ?
                '🎉 **TRIPLE SEVEN!** Absolutely legendary! 🔥🔥🔥' :
                '✨ **THREE OF A KIND!** That\'s a W right there! 🎊';
        } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
            result = '😊 Two matching! Not bad, decent pull fr';
        } else {
            result = '😔 No match... Better luck next time chief';
        }
        
        await interaction.reply(
            `🎰 [ ${slot1} | ${slot2} | ${slot3} ]\n\n${result}`
        );
    }
};
