var express = require('express');
var app = express();
var chai = require('chai');
var expect = require('chai').expect;
var should = require('should');
var supertest = require('supertest');
var server = supertest.agent("https://localhost:3000");
var request = require('supertest');
var bodyParser = require('body-parser');


// Unit test begins

// Index or home page test
// describe("Index Page  Unit test",function(){
// 	it("should return index page with my form and results table", function(done){
// 	request(app.listen()) 
// 	.get('/')
// 	.expect(200)
// 	.end(function(err,res){
//  		 done();
// 		});
// 	});

// });

//form post test 
  // var opd1 = parseInt(req.body.number1);
  // var opd2 = parseInt(req.body.number2);
  // var opn = req.body.operation;
  // var response = {opd1:opd1,opd2:opd2, opn:opn};

describe("SAMPLE unit test",function(){
  // #1 should return home page
   	it("should return index page with my form and results table", function(done){
	request(app.listen()) 
	.get('/')
	.expect(200)
	.end(function(err,res){
 		 done();
		});
	});
  

   // #2 perform math operations
  it("should add two number",function(done){

    //calling ADD api
    server
    .post('/operations')
    .send()
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // res.status.should.equal(200);
      // res.body.error.should.equal(false);
      // res.body.data.should.equal(40);
      done();
    });
  });

  // it("should return 404",function(done){
     
  // })
});
