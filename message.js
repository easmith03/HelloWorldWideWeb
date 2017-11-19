// message.js - Message route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Messages!!!!!!');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About Messages');
});

module.exports = router;