const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

// Post method for user  
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newUser = new User(data);

        const savedUser = await newUser.save();

        console.log(savedUser);
        res.status(201).json(savedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");

    }

})

//  Get Method for user

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);

    } catch ({ error }) {
        console.log(error);
        res.status(400).json("error while fetching the data ")
    }
})

// get users by work type
router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const user = await User.find({ work: workType });
            if (user.length == 0) {
                res.status(200).json("No one is " + workType);
            }
            console.log(user);
            res.status(200).json(user);
        } else {
            res.status(404).json("Invalid work Type");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }

})

// update the user 

router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;

        const data = await User.findByIdAndUpdate(userId, updatedUser, {
            new: true, // gives the updated data 
            runValidators: true // check all conditons based on schema 
        });

        if (!data) {
            res.status(400).json("User not found")
        }
        console.log(data);

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }

})

//  Delete the User 

router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await User.findByIdAndDelete(userId);
        if (!response) {
            res.status(400).json("User not found");
        }

        res.status(200).json("The user has deleted successfully ");
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }



})
module.exports = router;