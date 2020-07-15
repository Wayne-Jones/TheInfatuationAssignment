var assert = require('assert');
var expect = assert.expect;

function checkLengthPassword(passwordInput){
  if(passwordInput.length >=8 && passwordInput.length <=64){
      return true;
  }
  else{
      return false;
  }
}
describe('Password Length Check', function() {
 
    it('Should Return True if Password Length is between 8 and 64 characters', function() {
      assert.strictEqual(checkLengthPassword("HelloWorld"), true, "Should be true");
    });
    it('Should Return false if Password Length is less than 8 characters', function() {
      assert.strictEqual(checkLengthPassword("Pass"), false, "Should be false");
    });
    it('Should Return false if Password Length is more than 64 characters', function() {
      assert.strictEqual(checkLengthPassword("HelloMyNameIsWayneAndThisIsMyUserNameAndPasswordForAllOfYouToSee."), false, "Should be false");
    });

});


function checkIfAscii(passwordInput){
  return (/^[\x00-\x7F]*$/).test(passwordInput);
}

describe('Password Ascii Check', function() {
 
  it('Should Return True if Password Contains Only Ascii Values', function() {
    assert.strictEqual(checkIfAscii("Runaway!~!%"), true, "Should be true");
  });
  it('Should Return false if Password contains any non-ascii values', function() {
    assert.strictEqual(checkIfAscii("ForTheLoveOf¥£$"), false, "Should be false");
  });

});


function checkCommonPasswords(passwordInput, commonPasswordsArr){
  if (!commonPasswordsArr.includes(passwordInput)){
      return true;
  }
  else{
      return false;
  }
}
var commonPassArr = ['12345678', 'starwars', 'password'];
describe('Common Password Check', function() {
 
  it('Should Return True if Password is not within the common passwords list', function() {
    assert.strictEqual(checkCommonPasswords("starwars123", commonPassArr), true, "Should be true");
  });
  it('Should Return false if Password is in the common passwords list', function() {
    assert.strictEqual(checkCommonPasswords("starwars", commonPassArr), false, "Should be false");
  });

});