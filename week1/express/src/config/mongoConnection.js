const mongoose = require('mongoose');

const connectDB = mongoose.createConnection('mongodb://localhost:27017/usersDB');

connectDB.on('connected', () => {
    console.log('DB is connected ...');
});

connectDB.on('error', () => {
    console.log('DB is error ...');
});

connectDB.on('open', () => {
    console.log('DB is open ...');
});

connectDB.on('close', () => {
    console.log('DB is closed ...');
});

module.exports = connectDB;
