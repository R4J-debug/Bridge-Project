const xyFinanceService = require('../services/yBridge');

exports.getParams = async (req, res) => {
    try {
        const params = await xyFinanceService.fetchBuildTx(req.body);
        res.json(params);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
