const luv = require('./luv-phrases');

function sendPhrase() {
    const num = Math.floor(Math.random() * luv.length);
    return luv[num];
}

module.exports = sendPhrase();