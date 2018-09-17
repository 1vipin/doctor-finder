var express = require('express');
var router = express.Router();

router.get('/add', function(req, res, next) {
  res.render('addcategory');
});

router.post('/add', function(req, res, next) {

});

module.exports = router;