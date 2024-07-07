const express = require('express');
const quoteController = require('../controllers/quote');
const router = express.Router();

router.post('/', quoteController.getQuote);

module.exports = router;
