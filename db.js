const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://onworkonline9892:2GvEPulWmmPDam70@resturent.mk2nebo.mongodb.net/";

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