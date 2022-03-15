const playService = require('../services/play.js');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...playService
    };

    next();
};