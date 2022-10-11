const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const bot = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
require('dotenv').config();

bot.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    bot.commands.set(command.data.name, command)
}

bot.once("ready", () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

const {watch} = require('./features/messageWatch/watch');
bot.on('messageCreate', watch);

bot.on('interactionCreate', async interaction => {
    if(!interaction.isSelectMenu()) return;

    switch(interaction.customId) {
        case('type-char'):
            return await interaction.update({content: `you selected to be a ${interaction.values[0]}`, components: [], embeds: []})
        default:
            return interaction;
    }
})

bot.on("interactionCreate", async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command) return;

    try {
        await command.execute(interaction);
    } catch(error) {
        console.error(error);
        await interaction.reply({content: `there was an error while executing this command!`, ephemeral: true});
    }
})

bot.login(process.env.TOKEN)
