const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')

const db = lowdb(adapter);
const port = 8081;

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

module.exports = db;