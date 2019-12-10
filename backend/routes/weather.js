const express = require('express');

const router = express.Router();

const { getWeatherInfo } = require('../controllers/weather')

router.get('/', getWeatherInfo);

module.exports = router;
