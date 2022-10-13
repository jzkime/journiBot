const { parseMessageSave } = require('./watchMiddleware');

async function watch(message) {
    const { content, author, createdTimestamp } = message;
    if(message.author.bot) return;
    if(message.content.split(' ').length <= 5) return;
    const saved = await parseMessageSave(content, author.id, createdTimestamp);
    /**
     bot replies when a message is saved
     message.reply(parsed.message)
     */
    saved && message.react('🫠')
    /**
     bot reacts when message is saved into db
     */
}

module.exports = { watch };