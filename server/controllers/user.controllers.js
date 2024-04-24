const User = require('../models/user.model.js');

exports.addUesr = async (req, res) => {
    const { email, sub, name, picture } = req.body;
    await User.findOne({ sub }).then(async (user) => {
        if (user) {
            throw new Error('User already exists');
        }
        const newUser = new User({ email, sub, name, picture });
        await newUser.save();
        return res.status(201).json({
            newUser, message: 'User Joined successfully',
        })
    }).catch(err => {
        return res.status(400).json({
            error: err.message
        })
    })
}

exports.getUesrs = async (req, res) => {
    await User.find().then(async (users) => {
        return res.status(200).json({
            users, message: 'All users fetched',
        })
    }).catch(err => {
        return res.status(500).json({
            error: err.message
        })
    })
}
