const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        require: true
    },
    mobile: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        require: true
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;