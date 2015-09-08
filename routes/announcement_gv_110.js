var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('announcement_gv_110', { title: 'Express' });
});

module.exports = router;
