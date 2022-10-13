const db = require('../../data/knexconfig');

const findUser = (id) => {
    return db('users as u')
        .leftJoin('messages as m', 'u.user_id', 'm.user_id')
        .select('u.user_id', 'discord_id', 'message', 'message_id', 'timestamp')
        .where({discord_id: id})
        .then(r => r)
}

const addUser = async (id) => {
    return db('users').insert({discord_id: id})
        .then(r => r[0]);
}

const addMessage = async (m, u, time) => {
    const obj = await findUser(u);
    const o = obj[0];
    if(o?.user_id) {
        if(obj.length >= 3) {
            const message_id = findOldestMessage(obj);
            const change = await changeMessage(m, message_id, time);
            return change;
        }
        else
            return await insertMessageDB(m, o.user_id, time);
    } else {
        const user = await addUser(u);
        return await insertMessageDB(m, user, time);
    }
}

const insertMessageDB = async (message, user_id, timestamp) => {
    return db('messages')
        .insert({message, user_id, timestamp})
        .then(() => ({message, timestamp}));
}

const findOldestMessage = (obj) => {
    const {message_id} = obj.reduce((acc, cur) => {
        return cur.timestamp < acc?.timestamp ? cur : acc;
    }, {timestamp: Infinity})
    return message_id;
}

const changeMessage = (message, message_id, timestamp) => {
    return db('messages')
        .where({message_id})
        .update({message, timestamp})
        .then(() => ({message, timestamp}))
}

module.exports = { addMessage, findUser };