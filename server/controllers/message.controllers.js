const Message = require('../models/message.model.js')
const Conversation = require('../models/conversation.model.js')

exports.saveNewMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(
            req.body.conversationId,
            { message: req.body.text }
        );
        return res.status(201).json({
            message: 'Message has been sent successfully',
            newMessage
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(err.message);
    }
}