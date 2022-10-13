const { SlashCommandBuilder } = require('discord.js');
const memem = require('../features/messageWatch/mememMiddleware')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('memem')
        .setDescription("make a meme from someone's past posts")
        .addMentionableOption(option => 
                option.setName('memtion')
                .setDescription('mention someone to turn them into a meme!')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getMentionable('memtion').user;
        const {id, username} = user;
        const post = await memem.makeMeme(id, username);
        
        interaction.reply({...post})
    }
}