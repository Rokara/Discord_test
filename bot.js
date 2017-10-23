const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Sloužím vlasti!');
});

client.on('message', message => {
  If (message.content === 'ping') {
      message.reply('pong, vole!');
     }
 });
 client.login(process.env.BOT_TOKEN);
