var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab7'});
});

router.get('/contact', function(req, res){
	res.render('contact', {'title' : 'Lab7'});
});



module.exports = router;