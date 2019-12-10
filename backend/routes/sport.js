const express = require('express');

const router = express.Router();

const { getSportInfo } = require('../controllers/sport')

router.get('/', getSportInfo);

module.exports = router;
