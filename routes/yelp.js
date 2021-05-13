// this is the "routes/stocks.js" file...

var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

var myHeaders = new fetch.Headers();

const API_KEY = process.env.YELP_API_KEY

//console.log("API_KEY:", API_KEY) //Output to check API key syntax

myHeaders.append("Authorization", "Bearer " + API_KEY);

//console.log("API_KEY:", myHeaders) //Output to check API key syntax

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//const API_KEY = process.env.YELP_API_KEY || "abc123" // obtain your own api key and set via environment variable

router.get('/form', function (req, res, next) {
  res.render("yelp_form");
});

router.post('/dashboard', function (req, res, next) {
  console.log("FORM DATA", req.body)
  var symbol = req.body.symbol || "OOPS"
  console.log("Zip", symbol)
  location = ""

  var requestUrl = "https://api.yelp.com/v3/businesses/search?location=" + symbol 
  console.log("REQUEST URL", requestUrl)

   fetch(requestUrl, requestOptions)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log("Zip DATA SUCCESS", Object.keys(data))
        console.log("Top Business", data.businesses["0"].name)
        var recommendation = data.businesses["0"].name
        var location = data.businesses["0"].location.display_address["0"] + ", " + data.businesses["0"].location.display_address["1"] 
       
        console.log("Address ....", location)
        res.render("yelp_output", {symbol: symbol, data: JSON.stringify(data), recommendation, location});
      })
    .catch(function(err){
      console.log("ZIP DATA ERROR:", err)
      req.flash("danger", "OOPS, Please check your inputs and try again.")
      res.redirect("/yelp_form")
    })
});

module.exports = router;
