var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('announcement_gv_120_en', { title: 'Express' });
});

module.exports = router;
