const { When, Then } = require('cucumber');
const { expect } = require('chai');


When('I call subscribe', function(done) {
this.pubnub.subscribe({
    channels: ['demo-channel']
});
});

Then('channel should be subscribed', function() {
    console.log('channel subscribed');
});