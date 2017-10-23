const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Sloužím vlasti!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong, vole!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
