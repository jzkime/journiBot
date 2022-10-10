const db = require('../data/knexconfig');

const findMessage = (id) => {
    if(id) {
        return db('messages').where('message_id', id).first();
    } else {
        return db('messages');
    }
}

const addMessage = (message) => {
    return db('messages').insert({message}).then(async arr => await findMessage(arr[0]));
}

module.exports = {
    findMessage,
    addMessage
}