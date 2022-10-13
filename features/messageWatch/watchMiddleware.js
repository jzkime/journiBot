const watchMod = require('./watchModel');
const filter = require('../../data/staticData/filterwords');

function parseMessageSave(m, id, time) {
    const sM = m.split(' ');
    const set = new Set();
    for(w of sM) {
        if(w.length>=5 && !(/\p{Extended_Pictographic}/u.test(w)) && !filter.includes(w)) set.add(w);
    }
    const joined = Array.from(set).join(' ');
    if(!joined.length) return(false);
    return res = messageSave(joined, id, time);
}

async function messageSave(m, id, time) {
    try{
        const newM = await watchMod.addMessage(m, id, time);
        // returns true to watch command to send reaction
        return(true)
        // if sending a message to the bot to reply with
        // return({message: `new message: ${newM.message}, ${newM.timestamp}`});
    } catch(err) {
        console.error(err);
    }
}

module.exports = { parseMessageSave };