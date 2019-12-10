const express = require('express');
const config = require('config')
const { mwAuth } = require('../middlewares');

const router = express.Router();

const auth = require('./auth');
const news = require('./news');
const clothes = require('./clothes');
const weather = require('./weather');
const sport = require('./sport');
const tasks = require('./tasks');
const files = require('./files');

router.use('/api/auth', auth);
router.use('/api/news', [mwAuth], news);
router.use('/api/clothes', [mwAuth], clothes);
router.use('/api/weather', [mwAuth], weather);
router.use('/api/sport', [mwAuth], sport);
router.use('/api/tasks', [mwAuth], tasks);
router.use('/api/files', [mwAuth], files);

router.use('*', (req, res) => {
    res.render(__dirname + '/..' + config.get('static.public') + '/index.html');
});

module.exports = router;
