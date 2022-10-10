var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('backend/index', { breadcrum: 'Dashboard'});
});

router.get('/items', function(req, res, next) {
  res.render('backend/items/index', { breadcrum: 'Items'});
});

module.exports = router;
