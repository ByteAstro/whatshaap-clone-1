const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    },
}, { timestamps: true });

const Conversation = mongoose.model('conversation', conversationSchema);

module.exports = Conversation;