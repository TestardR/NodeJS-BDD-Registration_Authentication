var should = require('should');
var User = require('../models/user');

describe('User', function() {
  describe('defaults', function() {
    var user = {};
    before(function() {
      user = new User({ email: 'romain.rtestard@gmail.com' });
    });
    it('email is romain.rtestard@gmail.com');
    it('has an authentification token');
    it('has a pending status');
    it('has a signInCount of 0');
    it('has currentLogin');
    it('has a sessionToken');
    it('has a reminderToken');
    it('has a reminder sent date');
  });
});
