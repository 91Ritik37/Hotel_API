const mongoose = require("mongoose");

const menu = new mongoose.Schema({
    ItemName: {
        type: String,
        reuired: true
    },
    price: {
        type: Number,
        reuired: true
    },
    taste: {
        type: String,
        enum: ["spicy", "sour", "sweet"],
        reuired: true
    },
    is_drink: {
        type: Boolean,
        default: false,
    }
    ,
    ingredients: {
        type: [String],
        reuired: true,

    },
    num_sales: {
        type: Number,
        default: 0
    }

})

const Menu = mongoose.model("Menu", menu);
module.exports = Menu;



