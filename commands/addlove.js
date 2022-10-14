const { SlashCommandBuilder } = require('discord.js');
const luvModel = require('../features/models/luvModel');

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
        if(!string) interaction.reply({content: 'enter an input!', ephemeral: true})
        else {
            try {
                await interaction.deferReply();
                const rm = await luvModel.addMessage(string)
                interaction.editReply(`${rm.love_message} has been added`);
            } catch(err) {
                console.error(err)
                interaction.reply('error')
            }
        }
    }
}