const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.on('connected', () => {
    console.log("Connected to MongoDB");
})

db.on('disconnected', () => {
    console.log("disConnected to MongoDB");
})

module.exports = db;