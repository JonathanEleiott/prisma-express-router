const express = require('express');
const router = express.Router();

const { getOweners } = require('../prisma/owners.js');

router.get('/', async(req, res, next) => {
  const owners = await getOwners();
  res.send(owners)
})

router.get('/:id', (req, res, next) => {
  
})

router.post('/', (req, res, next) => {
  
})

router.put('/', (req, res, next) => {
  
})

router.delete('/', (req, res, next) => {
  
})

module.exports = router;