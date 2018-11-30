const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

router.use(controllers.useErrorPage);

module.exports = router;