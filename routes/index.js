var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// perform math operations

router.get('/operations', function(req,res){
  

});

module.exports = router;
