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
//Body parser
describe("Index Page  Unit test",function(){
	it("should return index page with my form and results table", function(done){
	request(app.listen()) 
	.get('/')
	.expect(200)
	.end(function(err,res){
 		 done();
		});
	});

});