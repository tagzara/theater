const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util/parsers.js');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('play/create');
});

router.post('/create', isUser(), async (req, res) => {
    console.log(req.body);

    try {
        // extract model data and forward to service
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            public: Boolean(req.body.public),
            author: req.user._id
        };

        await req.storage.createPlay(playData);


        res.redirect('/');
    } catch (err) {
        //  parse mongoose error object
        console.log(err.message);

        const ctx = {
            errors: parseError(err),
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public)
            }
        };
        res.render('play/create', ctx);
    }
});

module.exports = router;