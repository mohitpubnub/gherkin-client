const { When, Then } = require('cucumber');
const { expect } = require('chai');

When('I request the time', function(done) {

  this.pubnub.time((status, response) => {
    this.timetoken = response.timetoken;
    done();
  });
});

Then('the time should be returned', function(done) {
  expect(this.timetoken).to.be.greaterThan(15031768233407540);
  done();
});