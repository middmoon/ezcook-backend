const express = require('express');
const router = express.Router();

router
  .get('/', (req, res, next) => {
    res.render('index', { title: 'ADDRESS API V1' });
  })
  .use('/location', require('./address'));

module.exports = router;
