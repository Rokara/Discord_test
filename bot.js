const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'; 

client.on('message', message => {
    
    //Promenne
    let msg = message.content.toUpperCase(); //Promena udela z celeho textu velka pismena a stane se to tak case insensitive
    let sender = message.author; // Promenna si ulozi autora zpravy
    let cont = message.content.slice(prefix.lenght).split(" ");
    let args = cont.slice(1);
    
      
    if (msg === prefix + 'PING') {
    	message.reply('pong, vole!');
  	}
    // maže zprávy (ale check je při vytvoření, zpětně nefunguje
   // if (message.channel.id === '280243963909242880') {
   // message.delete()
   // }
    if (msg.startsWith(prefix + 'PURGE')) {
        async function purge() {
            message.delete();  //smaže mazací příkaz, ať se neplete
            
            //pojistka
            if (isNaN(args[0])) {
             
                message.channel.send('Prosím, zadej číslo, jako argument. \n Usage: '+ prefix + 'smazat <kolik>');
                return;
            }

            
        
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

client.on('ready', () => {
    console.log('Sloužím vlasti!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
