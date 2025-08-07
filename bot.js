const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
    console.log(`nova mensagem do ${message.from}: ${message.body}`);
});

client.on('message_create', message => {
    if (message.body === 'oi') {
        message.reply('ola');
    }
});

client.initialize();