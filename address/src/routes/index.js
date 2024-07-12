'use strict';
require('dotenv').config;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'ADDRESS_SERVER running at port: ' + process.env.ADDRESS_SERVER_PORT,
  });
});

router.get('/hello-world', (req, res, next) => {
  res.render('index', { title: 'Hello world!!' });
});

// API V1
router.use('/api/v1', require('./v1'));

module.exports = router;
