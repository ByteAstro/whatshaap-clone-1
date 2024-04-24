const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    sub: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
})

const User = mongoose.model('user', userSchema);

module.exports = User;