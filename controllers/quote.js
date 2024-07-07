const xyFinanceService = require('../services/yBridge');

exports.getQuote = async (req, res) => {
    try {
        const quote = await xyFinanceService.fetchQuote(req.body);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
