/**
 * Created by King Lee on 14-12-23.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('announcement_260_000066', {
		title: 'Express'
	});
});

module.exports = router;