const { parseMessageSave } = require('./watchMiddleware');

async function watch(message) {
    const { content, author, createdTimestamp } = message;
    if(message.author.bot) return;
    if(message.content.split(' ').length <= 5) return;
    await parseMessageSave(content, author.id, createdTimestamp);
    /**
     bot does not reply when saved
     message.reply(parsed.message)
     */
    message.react('🫠')
    /**
     bot reacts when it saves into db
     */
}

module.exports = { watch };