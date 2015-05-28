/**
 * Created by Kevin on 15-5-28.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('announcement_260', { title: 'Express' });
});

module.exports = router;
