var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  var users = [
    {"id": 1, "name": "Jane McConnel", "email": "jane@example.com"},
    {"id": 2, "name": "Earl Jones", "email": "earl@yahoo.com"},
    {"id": 3, "name": "Sammy Student", "email": "sammy@myschool.edu"},
  ] // just some dummy data
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  var userId = req.params.id;
  console.log("USER ID:", userId)

  var user = {"id": userId, "name": "Example User", "email": "example@example.com"} // just some dummy data
  res.send(user);


});

module.exports = router;
