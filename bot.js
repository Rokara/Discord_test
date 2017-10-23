const Discord = require('Discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Sloužím vlasti!');
});

client.on('message', message => {
  If (message.content === 'ping') {
      message.reply('pong, vole!');
     }
 });
 client.login(process.env.'MzcxODk1NTc1NzQ0MDg2MDI4.DM-t5g.CDI4TYnuFJ54rsqmZNOOxpjHQhM')
