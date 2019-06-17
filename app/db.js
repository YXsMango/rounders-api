let fs = require('fs')
    , util = require('util');

let pgp = require('pg-promise')();

let config = require('./config');

let readFile = util.promisify(fs.readFile);
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
            db = null;
            throw err;
        }
    }
}

async function executeScript(path) {
    try {
        // could parallelize the two promises but whatever
        let db = await getDB();
        let sql = (await readFile(path)).toString();

        return await db.query(sql);
    } catch (err) {
        throw err;
    }

}

module.exports = {
    getDB,
    executeScript
};
