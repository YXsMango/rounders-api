
let pgp = require('pg-promise')();

let config = require('./config');

let db;

async function getDB() {
    if (db) return db;
    else {
        try {
            db = pgp(config.database);
            await db.connect();
            console.log("Successfully connected to db...");

            return db;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = {
    getDB
};
