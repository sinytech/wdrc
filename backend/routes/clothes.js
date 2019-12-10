const express = require('express');

const router = express.Router();

const { getClothes } = require('../controllers/clothes')

router.get('/', getClothes);

module.exports = router;
