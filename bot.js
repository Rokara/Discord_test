

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '*';

bot.on('message', message => {
    //proměnné
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.lenght).split(" ");
    let args = cont.slice(1);

    //příkazy
    if (msg === prefix + 'HEJ') {

      message.channel.send('Sem tu, kámo...'); //odpoví do stejného kanálu jako normální post
      //message.reply - odpoví do stejného kanálu a v odpovědi "mention" autora
    }

    if (msg.startsWith(prefix + 'PURGE')) {
        async function purge() {
            message.delete();  //smaže mazací příkaz, ať se neplete

            if(!message.member.roles.find("name", "@bot-commander")) {
              message.channel.send('Potřebuješ na tento příkaz oprávnění \`@bot-commander\` , jinak nemohu sloužit....');
              return;
            }
            //pojistka
            if (isNaN(args[0])) {

                message.channel.send('Prosím, zadej číslo, jako argument. \n Použití: '+ prefix + 'purge <kolik, min 2, max 100, bez těchto závorek>');
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


bot.on('ready', () =>{
  console.log('Sloužím Vlasti!')
});


bot.login('MzcxODk1NTc1NzQ0MDg2MDI4.DM_GeA.Ke4KOLKOeVD3X8iSVJYpa9tQRLA')
