const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth', { title: 'Auth route', description: 'You are in auth route!' });
});

module.exports = router;
