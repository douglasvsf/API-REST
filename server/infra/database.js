const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'douglas',
    host: 'localhost',
    post: 5432,
    database: ''
});

module.exports = db;