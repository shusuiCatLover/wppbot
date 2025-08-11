require('dotenv').config();
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const phone_number = process.env.PHONENUMBER;
const client = new Client();

client.once('ready', async () => {
    console.log('Client is ready!');
    const chatId = `${phone_number}@c.us`;
    const helpMsg = 'Olá! Eu sou um chatbot. Digite "ajuda" para info.';
    const cadastroMsg = 'Esse bot é feito pra facilitar no cadastro dos dados para processos.\nPreencha o formulário: https://docs.google.com/forms/d/e/1FAIpQLSd0hN1YrtzV8lyU14mvYfZI1gUwgc7pkWZ0CtRWLupbDYMYtA/viewform?usp=sharing&ouid=102796545189549714307';
    try {
        await client.sendMessage(chatId, helpMsg);
        console.log('help message sent successfully');

        await client.sendMessage(chatId, cadastroMsg);
        console.log('Mensagem de cadastro enviada com sucesso!');
    } catch (error) {
        console.error('got a error while sending the help message or cadastro message', error);
    }
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
    console.log(`nova mensagem do ${message.from}: ${message.body}`);
});

// client.on('message_create', message => {
//     if (message.body === 'oi') {
//         message.reply('ola');
//     }
// });

client.initialize();