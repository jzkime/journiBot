const watchMod = require('./watchModel');
const filter = require('../../data/filterwords');

function parseMessageSave(m, id, time) {
    const sM = m.split(' ');
    const set = new Set();
    for(w of sM) {
        if(w.length>=5 && !(/\p{Extended_Pictographic}/u.test(w)) && !filter.includes(w)) set.add(w);
    }
    const joined = Array.from(set).join(' ');
    if(!joined.length) return;
    return res = messageSave(joined, id, time);
}

async function messageSave(m, id, time) {
    try{
        const newM = await watchMod.addMessage(m, id, time);
        return({message: `new message: ${newM.message}, ${newM.timestamp}`});
    } catch(err) {
        console.error(err);
    }
}

module.exports = { parseMessageSave };