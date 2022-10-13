const watchMod = require('./watchModel');

async function makeMeme(id, username) {
    const user = await watchMod.findUser(id)
    if(!user.length) return({content: 'this user has nothing to meme!', ephemeral: true})
    else {
        const word = await parseWords(user, id);
        return({content: `${username} be seething over ${word}`, ephemeral: false})
    }
}

function randomNum(len) {
    const num = Math.floor(Math.random() * len);
    return num
}

async function parseWords(user, id) {
    const allW = user.reduce((acc, cur) => acc +=  cur.message + " ", "").trim().split(' ');
    const set = new Set()
    for(a of allW) set.add(a);
    const arr = Array.from(set)
    const num = randomNum(arr.length);
    return arr[num];
}

module.exports = {
    makeMeme,
}