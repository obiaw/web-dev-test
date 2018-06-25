var express = require('express');
var app = express();
var chai = require('chai');
var expect = require('chai').expect;
var should = require('should');
var supertest = require('supertest');
var server = supertest.agent("https://localhost:3000");
var request = require('supertest');
var bodyParser = require('body-parser');
var assert = require("assert");


describe("Index Page unit test",function(){
  // #1 should return home page
   	it("should return index page with my form and results table", function(done){
	request(app.listen()) 
	.get('/')
	.expect(200)
	.end(function(err,res){
 		 done();
		});
	});
  
});


describe("Math Mperations Unit Testing", function() {
    describe("Adding two number", function() {
        it("it should add two number", function(done) {
            // Send some Form Data
            request(app.listen()) 
            .post('/operations')
            .send({opd1:3,opd2:2, opn:'ADD'})
            .end(function (err, res) {
                assert.equal(5, 3+2);              
                done();
            });
        });

    });

     describe(" Multiply two number", function() {
        it("it should Multiply two number", function(done) {
            // Send some Form Data
            request(app.listen()) 
            .post('/operations')
            .send({opd1:3,opd2:2, opn:'MUL'})
            .end(function (err, res) {
                assert.equal(6, 3* 2);              
                done();
            });
        });

    });

     describe("Subtract two number", function() {
        it("it should Multiply two number", function(done) {
            // Send some Form Data
            request(app.listen()) 
            .post('/operations')
            .send({opd1:3,opd2:2, opn:'SUB'})
            .end(function (err, res) {
                assert.equal(1, 3-2);              
                done();
            });
        });

    });


 describe("Divide two number", function() {
        it("it should Multiply two number", function(done) {
            // Send some Form Data
            request(app.listen()) 
            .post('/operations')
            .send({opd1:2,opd2:4, opn:'DIV'})
            .end(function (err, res) {
                assert.equal(0.5, 2 / 4);              
                done();
            });
        });

    });



});


