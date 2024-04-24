const express = require('express');
const { addUesr, getUesrs } = require('../controllers/user.controllers.js');

const router = express.Router();

router.post('/adduser', addUesr);
router.get('/users', getUesrs);

module.exports = router;

