const { SlashCommandBuilder} = require('discord.js');
const luvModel = require('../features/models/luvModel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('replies with a romantic phrase'),
    async execute(interaction) {
        await interaction.deferReply();
        const luv = await sendLuv();
        await interaction.editReply(luv);
    }
}

const sendLuv = async () => {
    const luvarr = await luvModel.findMessage();
    const num = Math.floor(Math.random() * luvarr.length);
    return luvarr[num].love_message;
}