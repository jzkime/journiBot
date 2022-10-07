//register and update slash commands
// only need to be registered once -> updated when def/options change

// clientId - app client id
// guidId - server id
// commands - array of commandsd to register

const fs = require('node:fs');
const path = require('node:path');
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
require('dotenv').config();
const env = process.env;



const commands = [];
const commandsPath = path.join(__dirname, commands);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: 10}).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), {body: commands})
    .then(data => console.log(`successfully registered ${data.length} application commands`))
    .catch(console.error)
