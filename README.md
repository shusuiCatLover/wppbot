# wppbot

wppbot is a simple WhatsApp bot built using the [whatsapp-web.js](https://wwebjs.dev/) library. It allows you to automate interactions on WhatsApp, such as responding to messages and handling events, by running a Node.js script that connects to your WhatsApp account via the web client.

## Features

- Connects to WhatsApp Web using QR code authentication
- Logs all incoming messages to the console
- Automatically replies messages
- Easily extendable for custom commands and automations

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- A WhatsApp account

### Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/username/wppbot.git
    cd wppbot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Usage

1. Start the bot:
    ```sh
    npm start
    ```

2. When prompted, scan the QR code displayed in your terminal using the WhatsApp app on your phone (Menu > Linked Devices > Link a Device).

3. The bot will log incoming messages and automatically reply "ola" to any message that says "oi".

### Example

When someone sends "oi" to your WhatsApp, the bot will reply with "ola".

## Project Structure

- [`bot.js`](bot.js): Main bot logic and event handlers
- [`package.json`](package.json): Project metadata and dependencies

## Extending the Bot

You can add more commands or automate other tasks by editing [`bot.js`](bot.js) and adding new event handlers or message checks.

## License

This project is licensed under MIT license
