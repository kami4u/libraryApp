/* eslint-disable no-unused-vars */

process.env.NODE_ENV = 'test';
var should = require('should');
var request = require('supertest');
var app = require('../app');
var mongoose = require('mongoose');
var { books } = require('../models/models');
var agent = request.agent(app);

describe('Books controllers tests', function() {
  it('should allow to be posted a book', function(done) {
    var bookPost = {title: 'my book', author: 'kami', genre: 'Science', read: 'false'};
    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end(function(err, results) {
        results.body.read.should.equal('false');
        results.body.should.have.property('_id');
        done();
      });
  });
  afterEach(function(done) {
    books.remove().exec();
    done();
  });
});