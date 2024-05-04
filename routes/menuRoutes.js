const express = require("express");
const router = express.Router();
const Menu = require("../model/menuSchema");


// Post Method for Menu Item..

router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const MenuItem = new Menu(data);

        const savedMenu = await MenuItem.save();
        console.log(savedMenu);
        res.status(201).json(savedMenu);


    } catch (error) {
        console.log(error);
        res.status(400).json("error while fetching the data ");

    }


})


// Get mathod for Menu ..

router.get("/", async (req, res) => {
    try {
        const menu = await Menu.find();
        console.log(menu);
        res.status(200).json(menu);
    } catch (error) {
        console.log(error);
        res.status(400).json("error while fetching the data ")
    }
})

// get menu based on tasted ..


router.get("/:taste", async (req, res) => {
    try {
        const tasteParam = req.params.taste;

        if (tasteParam == "spicy" || tasteParam == "sour" || tasteParam == "sweet") {
            const data = await Menu.find({ taste: tasteParam });
            if (data.length == 0) {
                res.json("None of the item is " + tasteParam);
            }
            res.status(200).json(data);
        } else {
            res.status(404).json("Invalid Tasted ")
        }



    } catch (error) {
        console.log(error);
        res.status(400).json("Internal Error")
    }



})


// update the menu...
router.put("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedMenu = req.body;

        const response = await Menu.findByIdAndUpdate(menuId, updatedMenu, {
            new: true,
            runValidators: true
        })

        if (!response) {
            res.status(404).json("No menu is present with This Id")
        }
        console.log(response);
        res.status(200).json(response);



    } catch (error) {
        console.log(error);
        res.status(400).json("Internal Error")
    }
})

//  Delete the MenuItem ..

router.delete("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await Menu.findByIdAndDelete(menuId);

        if (!response) {
            res.status(404).json("No menu is present with This Id")
        }
        res.status(200).json("MenuItem is deleted successfully");

    } catch (error) {
        console.log(error);
        res.status(400).json("Internal Error")
    }

})


module.exports = router;