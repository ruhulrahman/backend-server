// Get the client
const mysql = require('mysql2/promise');
const { PrismaClient } = require('@prisma/client');
// import { PrismaClient } from '@prisma/client'

// Create the connection to database
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'express_intern_test',
// });

const db = new PrismaClient();

module.exports = db;
// export default db;