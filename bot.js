const Discord = require('discord.js');
const client = new Discord.Client();
const PurgePrikaz = '!!BurnHereticBurn!!'; 

client.on('ready', () => {
    console.log('Sloužím vlasti!');
});

client.on('message', message => {
    
    //Promenne
    let msg = message.content.toUpperCase(); //Promena udela z celeho textu velka pismena a stane se to tak case insensitive
    let sender = message.author; // Promenna si ulozi autora zpravy
      
    if (msg.content === 'PING') {
    	message.reply('pong, vole!');
  	}
    // maže zprávy (ale check je při vytvoření, zpětně nefunguje
   // if (message.channel.id === '280243963909242880') {
   // message.delete()
   // }
    if (msg.startsWith(PurgePrikaz)) {
        async function purge() {
            message.delete();  //smaže mazací příkaz, ať se neplete
        
            const fetched = await message.channel.fetchMessages({limit: args[0]}); // vezme poslední číslo zprávy v kanálu
            console.log(fetched.size + ' hříšných knih házím na hořící hranici...'); //vzkaz do console, kolik zpráv je smazáno
            
            //mažeme zprávy
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); //V případě chyby, postne tuto do kanálu
        }
        //
        purge();
    }
        
        
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
