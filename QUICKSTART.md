# 🚀 QUICK START GUIDE

## Get Your Bot Running in 5 Minutes!

### ✅ Step 1: Get Discord Bot Token
1. Go to https://discord.com/developers/applications
2. Click "New Application" → Give it a name (e.g., "Fluxi Bot")
3. Go to "Bot" section on the left
4. Click "Reset Token" → Copy the token
5. **IMPORTANT:** Enable these 3 intents:
   - ✅ Presence Intent
   - ✅ Server Members Intent  
   - ✅ Message Content Intent
6. Save Changes!

### ✅ Step 2: Get Client ID
1. Still in Discord Developer Portal
2. Go to "General Information" on the left
3. Copy your "Application ID" (this is your CLIENT_ID)

### ✅ Step 3: Get Gemini API Key
1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key" → Copy it
4. ⭐ It's FREE! (No credit card needed)

### ✅ Step 4: Get Your Discord User ID
1. Open Discord
2. Settings → Advanced → Enable "Developer Mode"
3. Right-click your username → "Copy User ID"

### ✅ Step 5: Fill in .env File
Open the `.env` file and paste your values:

```env
DISCORD_TOKEN=paste_your_bot_token_here
CLIENT_ID=paste_your_application_id_here
GEMINI_API_KEY=paste_your_gemini_key_here
OWNER_ID=paste_your_user_id_here
```

### ✅ Step 6: Invite Bot to Your Server
1. Back in Discord Developer Portal
2. Go to "OAuth2" → "URL Generator"
3. Select scopes:
   - ✅ bot
   - ✅ applications.commands
4. Select permissions:
   - ✅ Administrator (easiest)
   - OR select specific permissions you want
5. Copy the generated URL at the bottom
6. Paste it in your browser → Select your server → Authorize!

### ✅ Step 7: Run the Bot!
Open terminal in the fluxi-bot folder:

```bash
npm start
```

You should see:
```
✓ Loaded command: rate
✓ Loaded command: roast
...
🤖 Fluxi Bot is ONLINE!
```

### ✅ Step 8: Test It!
Go to your Discord server and type:
```
/fluxi hello
/rate @someone
/coinflip
```

## 🎉 That's It!

Your bot is now live! Try all the commands:

**Fun Commands:**
- `/rate @user` - Rate someone
- `/roast @user` - Roast someone  
- `/ship @user1 @user2` - Ship calculator
- `/8ball question` - Magic 8-ball

**AI Commands (Powered by Gemini):**
- `/fluxi message` - Chat with AI
- `/fluxiadvice topic` - Get advice
- `/sayasfluxi text` - AI-generated message

**Games:**
- `/rps choice` - Rock Paper Scissors
- `/guessnumber` - Guess the number
- `/slot` - Slot machine

## ❓ Troubleshooting

**Commands not showing?**
- Wait 1-2 minutes after starting bot
- Make sure bot is online in your server
- Check you selected `applications.commands` when inviting

**"Invalid Token" error?**
- Double-check your DISCORD_TOKEN in .env
- Make sure there are no extra spaces
- Token should start with something like: MTI3...

**Gemini commands not working?**
- Verify GEMINI_API_KEY is correct
- Make sure you created the key at https://aistudio.google.com/app/apikey
- Free tier has rate limits, don't spam!

**Bot offline immediately after starting?**
- Check console for error messages
- Verify all intents are enabled in Discord portal
- Make sure .env file is in the correct location

## 📞 Need More Help?

Check the full README.md for detailed documentation!

---

**Have fun with your bot! 🎮🤖**
