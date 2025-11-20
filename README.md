# 🤖 Fluxi Bot - AI-Powered Discord Bot

A feature-rich Discord bot with a fun, gamer personality powered by Grok AI via OpenRouter!

## ✨ Features

### 🎮 Fun & Entertainment
- `/rate` - Rate someone 1-100%
- `/roast` - Funny roasts
- `/compliment` - Wholesome compliments
- `/coinflip` - Heads or Tails
- `/dice` - Roll 1-6
- `/8ball` - Magic 8-ball answers
- `/fact` - Random facts
- `/say` - Make the bot say something
- `/fakehack` - Fun hacking simulation
- `/howcool` - Rate coolness level
- `/iqtest` - Random IQ test
- `/ship` - Love compatibility calculator

### 🎯 Mini Games
- `/rps` - Rock Paper Scissors
- `/guessnumber` - Number guessing game
- `/whowouldwin` - Battle simulator
- `/slot` - Slot machine
- `/truth` - Truth questions
- `/dare` - Dare challenges

### 🧠 AI-Powered Commands (Grok via OpenRouter)
- `/fluxi` - Chat with Fluxi's AI personality
- `/fluxiadvice` - Get motivational advice
- `/sayasfluxi` - Bot talks with AI personality (Admin only)
- **@mention** - Mention the bot anywhere to chat!

### 🛡️ Moderation & Utilities
- `/userinfo` - User information
- `/serverinfo` - Server information
- `/avatar` - Get user avatars
- `/purge` - Bulk delete messages
- `/kick` - Kick members
- `/ban` - Ban members
- `/slowmode` - Set channel slowmode

### 👑 Admin/Owner Commands
- `/status` - Change bot status
- `/shutdown` - Turn off bot (owner only)

## 🚀 Installation

### Prerequisites
- Node.js v18 or higher
- A Discord Bot Token
- An OpenRouter API Key (https://openrouter.ai)

### Step 1: Clone or Download
```bash
# Download the project to your computer
cd fluxi-bot
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   ```env
   DISCORD_TOKEN=your_discord_bot_token_here
   CLIENT_ID=your_bot_client_id_here
   GUILD_ID=your_server_id_here  # Optional: for instant command deployment
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   OWNER_ID=your_discord_user_id_here
   ```

#### Getting Your Credentials:

**Discord Bot Token:**
1. Go to https://discord.com/developers/applications
2. Create a "New Application"
3. Go to "Bot" section
4. Click "Reset Token" and copy it
5. Enable these intents:
   - Presence Intent
   - Server Members Intent
   - Message Content Intent
6. Go to "OAuth2" → "URL Generator"
   - Select scopes: `bot`, `applications.commands`
   - Select permissions: Administrator (or specific permissions)
   - Copy the generated URL and invite your bot

**Client ID:**
- Found on the "General Information" page of your Discord application

**OpenRouter API Key:**
1. Go to https://openrouter.ai/keys
2. Sign in and create an account
3. Click "Create Key"
4. Copy your API key
5. Add credits to your account (pay-as-you-go pricing)

**Owner ID:**
1. Enable Developer Mode in Discord (Settings → Advanced)
2. Right-click your username → Copy User ID

### Step 4: Run the Bot
```bash
npm start
```

You should see:
```
✓ Loaded command: rate
✓ Loaded command: roast
...
🔄 Refreshing application (/) commands...
✓ Successfully registered application commands!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Fluxi Bot is ONLINE!
📛 Logged in as: Fluxi Bot#1234
🎮 Serving 1 server(s)
🧠 AI powered by Grok via OpenRouter
💬 Mention me anywhere to chat!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🎨 Fluxi's Personality

Fluxi is a funny, sarcastic AI with gamer vibes who:
- Uses slang like "bro", "ngl", "fr fr", "no cap"
- Gives light roasts and dramatic compliments
- Has chaotic but wholesome energy
- Never says anything harmful or offensive

## 📝 Adding New Commands

To add a new command, create a file in the `commands/` folder:

```javascript
import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('yourcommand')
        .setDescription('Your command description')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Input description')
                .setRequired(true)
        ),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        await interaction.reply(`You said: ${input}`);
    }
};
```

The bot automatically loads all command files on startup!

## 🤖 Using Grok AI in Commands

Access the AI in any command:

```javascript
async execute(interaction) {
    const prompt = "Your prompt here";
    const response = await interaction.client.callAI(prompt);
    await interaction.reply(response);
}
```

## 🔧 Troubleshooting

**Commands not showing up:**
- Make sure you've invited the bot with `applications.commands` scope
- Wait a few minutes for Discord to sync commands
- Try `/` in your server to see if commands appear

**OpenRouter API errors:**
- Verify your `OPENROUTER_API_KEY` is correct
- Check you have credits in your OpenRouter account
- Ensure your API key is active

**Bot not responding:**
- Check console for errors
- Verify all intents are enabled in Discord Developer Portal
- Make sure `.env` file is in the root directory

## 📦 Project Structure

```
fluxi-bot/
├── commands/           # All command files
│   ├── rate.js
│   ├── fluxi.js
│   └── ...
├── utils/             # Helper functions
│   └── helpers.js
├── index.js           # Main bot file
├── package.json       # Dependencies
├── .env              # Your credentials (DO NOT SHARE!)
├── .env.example      # Template for .env
└── README.md         # This file
```

## 🎯 Tips

- **API Costs:** Grok via OpenRouter uses pay-as-you-go pricing - monitor your usage
- **Permissions:** Make sure the bot has proper permissions in your server
- **Updates:** Keep dependencies updated with `npm update`
- **Security:** NEVER share your `.env` file or tokens!
- **Guild Commands:** Use GUILD_ID for instant command deployment in testing

## 🐛 Common Issues

1. **"Invalid Token" error:** Double-check your DISCORD_TOKEN in `.env`
2. **Commands not registering:** Make sure CLIENT_ID is correct
3. **AI not responding:** Verify OPENROUTER_API_KEY is valid and has credits
4. **Permission errors:** Give the bot Administrator permission or specific permissions
5. **404 Model Error:** Make sure you're using a valid model (x-ai/grok-4.1-fast)

## 📄 License

MIT License - Feel free to modify and use!

## 🙏 Credits

- Built with [Discord.js](https://discord.js.org/)
- Powered by [Grok AI](https://x.ai/grok) via [OpenRouter](https://openrouter.ai/)
- Made with ❤️ for the Discord community

---

**Enjoy your Fluxi Bot! 🎉**

Need help? Check the console logs for errors or create an issue!
# fluxi
