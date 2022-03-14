const authController = require('../controllers/authController.js');
const playController = require('../controllers/playController.js');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/play', playController);
};