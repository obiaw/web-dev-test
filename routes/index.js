var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Awamon Web Developer Exam' });
});


// post form when user fills it in
router.post('/operations', function(req,res, next){
  //get user input from form
  var opd1 = parseInt(req.body.number1);
  var opd2 = parseInt(req.body.number2);
  var opn = req.body.operation;
  // var ans;

  //   switch(opn){
  //     case "ADD":
  //         ans = opd1 + opd2;
  //         return ans;
  //         break;
  //     case "SUB":
  //         ans = opd1 - opd2;
  //         return ans;
  //         break;
  //     case "MUL":
  //         ans = opd1 * opd2;
  //         return ans;
  //         break;
  //     case "DIV":
  //         ans = opd1 / opd2;
  //         return ans;
  //         break;

  //     default:
  //     break

  //   };

  var response = {opd1:opd1,opd2:opd2, opn:opn};

  console.log(response);
  res.send(response);

});

module.exports = router;
