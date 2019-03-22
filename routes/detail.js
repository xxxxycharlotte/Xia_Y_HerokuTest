var express = require('express');
var router = express.Router();

const allData = require('../data');

router.get('/:product', function(req, res) {
  let data = allData[req.params.product];
  if (data) {
    console.log('product:', data);
    res.render('detail', data);
    return;
  }
  res.render('404', {
    message: "Sorry, the page you're looking for is not found!"
  });
});

module.exports = router;
