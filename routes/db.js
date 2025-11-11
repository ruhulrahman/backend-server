// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_intern_test',
});

module.exports = db;
// export default db;