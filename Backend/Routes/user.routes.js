const express = require("express");
const { userModel } = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ueserRoutes = express.Router();

ueserRoutes.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.json({ err: err.message })
            } else {
                const user = new userModel({ email, password: hash })
                await user.save();
                // res.json({ msg: "new user has been added", user: req.body })
            }
        })
        res.json({ msg: "new user has been added", user: req.body })

    } catch (error) {
        res.json({ error: error.message })
    }

});

ueserRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ course: "BE" }, "masai")
                    res.json({ msg: "user is logged in!!", token })
                } else {
                    res.json({ msg: "wrong credentials" })
                }
            })
        }


    } catch (err) {
        res.json({ error: err.message })
    }

});


module.exports = { ueserRoutes }