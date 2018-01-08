var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.post('/hungrydata', function(req, res, next) {
  fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    var hungrydata = JSON.parse(data.toString())
    console.log(hungrydata);
    res.json(hungrydata)
  });
});

module.exports = router;
