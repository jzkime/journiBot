const { parseMessageSave } = require('./watchMiddleware');

async function watch(message) {
    const { content, author, createdTimestamp } = message;
    if(message.author.bot) return;
    if(message.content.split(' ').length <= 5) return;
    const parsed = await parseMessageSave(content, author.id, createdTimestamp);
    console.log(parsed)
    message.reply(parsed.message)
}

module.exports = { watch };