'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('message', message => {
    // If the message is 'rip'
    if (message.content === 'rip') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
      // Send the attachment in the message channel
      message.channel.send(attachment);
    }
  });

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env'NzA0MTU4MTI5OTYwNzc5ODM2.XqZJ8A.VfqvV8Vk_Gk2DjyMx9v-zEk0cR0');
