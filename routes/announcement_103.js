/**
 * Created by tianwen on 2015/4/7.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('announcement_103', { title: 'Express' });
});

module.exports = router;
