const { SlashCommandBuilder } = require('discord.js');
const luvMod = require('../commandModels/luvModel');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addlove')
        .setDescription('adds a love message to the db')
        .addStringOption(option => 
            option.setName('input')
                .setDescription('new love phrase?')
        ),
    async execute(interaction) {
        const string = interaction.options.getString('input')
        if(!string) interaction.reply('enter an input!')
        else {
            try {
                await interaction.deferReply();
                const rm = await luvMod.addMessage(string)
                interaction.editReply(`${rm.message} has been added`);
            } catch(err) {
                console.error(err)
                interaction.reply('error')
            }
        }
    }
}