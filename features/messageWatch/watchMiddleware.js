const watchMod = require('./watchModel');

function parseMessageSave(m, id, time) {
    console.log(m, id);
    const sM = m.split(' ');
    const set = new Set();
    for(w of sM) {
        if(w.length>=3) set.add(w);
    }
    const joined = Array.from(set).join(' ');
    return res = messageSave(joined, id, time);
}

async function messageSave(m, id, time) {
    try{
        const newM = await watchMod.addMessage(m, id, time);
        return({message: `new message: ${newM.m}, ${newM.time}`});
    } catch(err) {
        console.error(err);
    }
}

// function parseForMeme(m) {
//     const splitM = m.split(' ');
//     const map = {};
//     for(w of splitM) {
//         if(w.length >= 3 && !(w in map)) map[w] = 1; 
//     }
// }

module.exports = { parseMessageSave };