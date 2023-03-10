// package.json set type:module use import
import { Client, Events, GatewayIntentBits } from 'discord.js'
import vuelnit from '@/core/vue'
import dotenv from 'dotenv'

vuelnit()
// read .env data
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// use .env data
client.login(process.env.TOKEN);