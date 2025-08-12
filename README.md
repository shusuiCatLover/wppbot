# wppbot

wppbot is a simple WhatsApp bot built using the [whatsapp-web.js](https://wwebjs.dev/) library. It automates WhatsApp interactions by connecting to your account via the web client and running a Node.js script.

## Features

- Connects to WhatsApp Web using QR code authentication
- Sends a welcome/help message and a registration form link automatically to a configured number when the bot starts
- Logs all incoming messages to the console for monitoring
- Easily extendable for custom commands and automations

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- A WhatsApp account

### Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/yourusername/wppbot.git
    cd wppbot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the project root and add your WhatsApp phone number:
    ```
    PHONENUMBER=1234567890123
    ```

### Usage
 
1. Start the bot:
    ```sh
    npm start
    ```

2. Scan the QR code displayed in your terminal using the WhatsApp app on your phone (Menu > Linked Devices > Link a Device).

3. When the bot is ready, it will automatically send a help message and a registration form link to the configured phone number.

4. All incoming messages will be logged to the console.

## Project Structure

- [`bot.js`](bot.js): Main bot logic and event handlers
- [`package.json`](package.json): Project metadata and dependencies
- `.env`: Environment variables

## Extending the Bot and TODO LIST

You can add more commands or automate other tasks by editing [`bot.js`](bot.js) and adding new event handlers or message checks. For example, you can uncomment and modify the provided code to reply to specific messages.

to "finish" this project we still need to...
- define a functional message flow 
- define a business account
- look for wpp helping options regarding google form features improving convenience for the client

## License

This project is licensed under MIT license
