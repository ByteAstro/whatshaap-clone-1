const Conversation = require('../models/conversation.model.js');

exports.newConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
        if (exist) {
            return res.status(200).json({
                message: 'Conversation already exists'
            });
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        return res.status(201).json({
            message: 'Conversation saved successfully'
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(err.message)
    }
}

exports.getConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        let conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
        return res.status(200).json(conversation);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(err.message);
    }
}