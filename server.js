const express = require("express");
const app = express();
const User = require("./model/userSchema");
const db = require("./db");
const bodyParse = require("body-parser");
const Menu = require("./model/menuSchema");
app.use(bodyParse.json());
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.json("Welcome to my home page ")
})


const userRoute = require("./routes/userRoutes");
app.use("/user", userRoute);


const menuRoute = require("./routes/menuRoutes");
app.use("/menu", menuRoute);








app.listen(PORT, () => {
    console.log("App is listen on 3001")
})