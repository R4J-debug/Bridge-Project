const xyFinanceService = require('../services/yBridge');

exports.getTokens = async (req, res) => {
    try {
        const tokens = await xyFinanceService.fetchRecommendedTokens();
        res.json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
