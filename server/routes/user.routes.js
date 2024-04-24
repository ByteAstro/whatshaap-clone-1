const express = require('express');
const { addUesr, getUesrs } = require('../controllers/user.controllers.js');
const { newConversation, getConversation } = require('../controllers/conversation.controllers.js');
const { saveNewMessage } = require('../controllers/message.controllers.js');

const router = express.Router();

router.post('/adduser', addUesr);
router.get('/users', getUesrs);

router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);

router.post('/message/add', saveNewMessage);


module.exports = router;

