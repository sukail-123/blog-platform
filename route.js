const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {

    const hashedPassword =
        await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "User Registered"
    });
});

// Login
router.post("/login", async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(404)
            .json({ message: "User Not Found" });
    }

    const valid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!valid) {
        return res.status(400)
            .json({ message: "Wrong Password" });
    }

    const token = jwt.sign(
        { id: user._id },
        "secretkey"
    );

    res.json({ token });

});

module.exports = router;
