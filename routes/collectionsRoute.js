const express = require('express');
const { getData } = require('../controller/collectionController');
const router = express.Router();

router.get('/', getData);

module.exports = router;
