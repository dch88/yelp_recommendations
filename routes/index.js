var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find Top Restaurants in Your Area' });
});

/* GET about page. */
router.get('/yelp_form', function(req, res, next) {
  res.render('yelp_form');
});

/* GET hello page. */
router.get('/about', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  res.render('about');
});

//...


module.exports = router;
