const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

router.get('/', controllers.getContact);
router.post('/handler', controllers.postContactMessage);

module.exports = router;