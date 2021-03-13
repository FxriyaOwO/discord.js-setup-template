const Discord = require('discord.js');
// type npm install discord.js in your code editors terminal


const client = new Discord.Client();
// you can either put 'client' or 'bot' ( w/ out the single quotations )
// but if you put bot , you will have to put 'bot' instead of client in the rest of the code. (dont include the single quotations)

const prefix = '-'; // you can put your own prefix instead of '-'

client.on('ready', () => {
  console.log('I am ready to run')
});

client.login('token here'); // get ur bot token from discord developer portal and paste in quotations
