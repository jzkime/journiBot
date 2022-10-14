const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('type')
        .setDescription('select your character type'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('type-char')
                    .setPlaceholder('nothing selected')
                    .addOptions(
                        {
                            label: 'kawaii',
                            description: 'u///u',
                            value: 'cutie'
                        },
                        {
                            label: 'tsundere',
                            description: 'totally not poisonous',
                            value: 'tsundere. (baka)'
                        },
                        {
                            label: 'baka',
                            description: 'why would you do that...',
                            value: 'mega baka'
                        }
                    )
            );

        const embed = new EmbedBuilder()
                .setColor(0x6d33b4)
                .setTitle('Character Type')
                .setDescription('pick a character type')

            await interaction.reply({content: 'oya oya?', ephemeral: true, embeds: [embed], components: [row]})
    }
}
