require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const phone_number = process.env.PHONENUMBER;
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" })
});

client.once('ready', async () => {
    console.log('Client is ready!');
    const chatId = `${phone_number}@c.us`;
    const helpMsg = 'Olá! Eu sou um chatbot feito pra facilitar no cadastro dos dados para processos. Digite "ajuda" para info.\nSe quiser o link do formulário de cadastro, envie: form';
    try {
        await client.sendMessage(chatId, helpMsg);
        console.log('help message sent successfully');
    } catch (error) {
        console.error('got a error while sending the help message', error);
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', async message => {
    console.log(`nova mensagem do ${message.from}: ${message.body}`);
    if (['ping', 'Ping', 'PING'].includes(message.body)) {
        await message.reply('pong!');
    }
    if (message.body.toLowerCase() === 'form') {
        const cadastroMsg = 'Preencha o formulário: https://docs.google.com/forms/d/e/1FAIpQLSd0hN1YrtzV8lyU14mvYfZI1gUwgc7pkWZ0CtRWLupbDYMYtA/viewform?usp=sharing&ouid=102796545189549714307';
        await message.reply(cadastroMsg);
    }
    if (message.body.toLowerCase() === 'ajuda') {
        const helpMsg = 'Comandos disponíveis:\n' +
            '- "form": Recebe o link do formulário de cadastro\n' +
            '- "ping": Testa a resposta do bot\n' +
            '- "ajuda": Exibe esta mensagem de ajuda';
        await message.reply(helpMsg);
    }
});

client.on('remote_session_saved', () => {
    console.log('Sessão salva localmente!');
});

client.initialize();