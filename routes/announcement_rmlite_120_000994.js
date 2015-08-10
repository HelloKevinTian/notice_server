var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('announcement_rmlite_120_000994', {
		title: 'Express'
	});
});

module.exports = router;