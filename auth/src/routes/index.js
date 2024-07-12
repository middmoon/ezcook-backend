var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/hello-world', (req, res, next) => {
  res.render('index', { title: 'Hello world!!' });
});

// API V1
router.use('/v1/api', require('./v1'));

module.exports = router;
