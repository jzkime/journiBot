const db = require('../../data/knexconfig');

const findMessage = (id) => {
    if(id) {
        return db('love').where('love_id', id).first();
    } else {
        return db('love');
    }
}

const addMessage = (love_message) => {
    return db('love').insert({love_message}).then(async arr => await findMessage(arr[0]));
}

module.exports = {
    findMessage,
    addMessage
}
