const config = require('../knexfile.js');
const knex = require('knex');
const environment = process.env.ENVIRONMENT || 'development';
module.exports = knex(config[environment]);