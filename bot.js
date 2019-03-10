const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTU0Mzg2MDE3NTI4OTcxMjk4.D2b4vQ.d_oFtoww0sfTRe5AoIRkiG0uGg0);
