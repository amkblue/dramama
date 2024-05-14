// import modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// mongoose schema for user
const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type:String
    }
}, {
    timestamps: true // show created & updated in db
});

// create users
const users = mongoose.model('User', userSchema);
// create router
const router = express.Router();

// register - POST
router.post('/register', asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400).json({ error: "Missing username or email or password"});
    }
    try {
        const emailInUse = await users.findOne({email});
        const usernameInUse = await users.findOne({username});
        if (emailInUse || usernameInUse) {
            res.status(400).json({ error: "User is already registered"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await users.create({
            username,
            email,
            password: hashPassword
        });
        if (user) {
            res.status(201).json({ message: "Registration was successful! :)"});
        } else {
            res.status(400).json({ error: "Registration failed..."});
        }
    } catch (error) {
        res.status(500).json({ error: "Server error"});
    }
}));

// export
module.exports = router;