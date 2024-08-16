const express = require('express');
const router = express.Router();

router.use('/owners', require('./owners.js'));
router.use('/pets', require('./pets.js'))
router.use('./products', require('./products.js'))

module.exports = router;