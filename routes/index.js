var express = require('express');
var router = express.Router();
var connection = require('../db_connect.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //
  connection.query('SELECT * FROM property LIMIT 100', function(err, rows) {
    if(err) {
      req.flash('error', err);
      res.render('data', {page_title:"Users - Node.js", data:''});
    }
    else {
      res.render('data', {page_title:"Users - Node.js", data:rows});
    }
  });
});



module.exports = router;
