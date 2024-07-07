const express = require('express');
const { getTokens } = require('../controllers/tokens');
const router = express.Router();

router.get('/', getTokens);

module.exports = router;
