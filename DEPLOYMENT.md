# Fluxi Bot Deployment Guide

## Option 1: Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Add environment variables:
     - `DISCORD_TOKEN`
     - `CLIENT_ID`
     - `GUILD_ID` (optional)
     - `OPENROUTER_API_KEY`
     - `OWNER_ID`
   - Click "Deploy"

## Option 2: Render

1. **Push to GitHub** (same as above)

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Set:
     - **Name:** fluxi-bot
     - **Environment:** Node
     - **Build Command:** `npm install`
     - **Start Command:** `node index.js`
   - Add environment variables in the dashboard
   - Click "Create Web Service"

## Option 3: Heroku

1. **Install Heroku CLI:**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Deploy:**
   ```bash
   heroku login
   heroku create fluxi-bot
   git push heroku main
   
   # Set environment variables
   heroku config:set DISCORD_TOKEN=your_token
   heroku config:set CLIENT_ID=your_client_id
   heroku config:set GUILD_ID=your_guild_id
   heroku config:set OPENROUTER_API_KEY=your_api_key
   heroku config:set OWNER_ID=your_owner_id
   
   # Scale worker
   heroku ps:scale worker=1
   ```

## Option 4: VPS (DigitalOcean, Linode, etc.)

1. **SSH into your VPS:**
   ```bash
   ssh root@your_server_ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and setup:**
   ```bash
   git clone YOUR_REPO_URL
   cd fluxi-bot
   npm install
   ```

4. **Create .env file:**
   ```bash
   nano .env
   # Paste your environment variables
   ```

5. **Install PM2 (process manager):**
   ```bash
   npm install -g pm2
   pm2 start index.js --name fluxi-bot
   pm2 startup
   pm2 save
   ```

## Environment Variables Required

- `DISCORD_TOKEN` - Your Discord bot token
- `CLIENT_ID` - Your bot's client ID
- `GUILD_ID` - (Optional) Your Discord server ID for instant command deployment
- `OPENROUTER_API_KEY` - Your OpenRouter API key
- `OWNER_ID` - Your Discord user ID

## Verify Deployment

After deployment, check:
1. Bot shows as online in Discord
2. Slash commands appear in your server
3. Try `/fluxi` or mention the bot to test AI responses

## Troubleshooting

- **Bot offline:** Check logs for errors
- **Commands not showing:** Wait up to 1 hour for global commands, or use GUILD_ID for instant deployment
- **AI not responding:** Verify OPENROUTER_API_KEY is correct
