const playService = require('../services/theater.js');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...playService
    };

    next();
};