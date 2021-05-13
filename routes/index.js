var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find Top Restaurants in Your Area' });
});

/* GET form page. */
router.get('/yelp_form', function(req, res, next) {
  res.render('yelp_form');
});

/* GET otherlinks page. */
router.get('/otherlinks', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  res.render('otherlinks');
});

//...


module.exports = router;
