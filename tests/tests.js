var should = require('should'),
    sinon = require('sinon');
var { addBook } = require('../controllers');

describe('Books controller tests', function() {
    describe('Post', function() {
        it('should not allow empty title on post', function() {
            var req = {
                body: {
                    author: 'John'
                }
            };
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };
            addBook(req, res);
            res.status.calledWith(400).should.equal(true, 'Bad status ' + res.status);
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});