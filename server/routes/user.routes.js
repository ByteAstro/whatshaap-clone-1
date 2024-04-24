const express = require('express');
const { addUesr, getUesrs } = require('../controllers/user.controllers.js');
const { newConversation } = require('../controllers/conversation.controllers.js');

const router = express.Router();

router.post('/adduser', addUesr);
router.get('/users', getUesrs);

router.post('/conversation/add', newConversation);

module.exports = router;

