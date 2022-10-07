const { SlashCommandBuilder} = require('discord.js');

const luv = require('../love/luv-phrases');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('replies with a romantic phrase'),
    async execute(interaction) {
        interaction.reply(sendLuv());
    }
}

const sendLuv = () => {
    const num = Math.floor(Math.random() * luv.length);
    return luv[num];
}
