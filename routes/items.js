var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('layouts/dashboard/wrapper', { title: 'Item List'});
});

module.exports = router;
