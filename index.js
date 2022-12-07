const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
});

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
     Discord.Intents.FLAGS.GUILDS,
     Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});
const prefix = '!'///////هنا البرفكس

client.on('ready', () => {
    console.log(`Bot is On! ${client.user.tag}`);
})

client.login(process.env.token); 


//=========V13 بعد هذا السطر حط الأكواد اصدار ========//


