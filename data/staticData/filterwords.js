const adj = require('./words/adj');
const stopWords = require('./words/stopwords');
module.exports = [
    ...stopWords,
    ...adj,
    "asdf"
]