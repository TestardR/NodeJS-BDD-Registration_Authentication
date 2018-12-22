var Registration = require('../lib/registration');

describe('Registration', function() {
  // happy path
  describe('a valid application', function() {
    var regResult = {};
    before(function() {
      regResult = Registration.applyForMembership({
        email: 'romain.rtestard@gmail.com'
      });
    });
    it('is successful', function() {
      regResult.success.should.equal(true);
    });
    it('creates a user', function() {
      regResult.should.be.defined;
    });
    it('creates a log entry');
    it('sets the user(s status to approved');
    it('offers a welcome message');
  });
  describe('an empty or null email', function() {
    it('is not successful');
    it('tells user that email is required');
  });
  describe('a empty or null password', function() {
    it('is not successful');
    it('tells user that password is required');
  });
  describe('password and confirm mismatch', function() {
    it('is not successful');
    it('tells user that confirm is required');
  });
  describe('email already exists', function() {
    it('is not successful');
    it('tells user that email already exists');
  });
});
