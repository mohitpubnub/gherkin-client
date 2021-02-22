const { When, Then } = require('cucumber');
const { expect } = require('chai');

When('I call publish', function(done) {
this.pubnub.publish(
    {
        message: {
            complex: 'object'
        },
        channel: 'demo-channel',
        storeInHistory: false, 
        meta: {
            "cool": "meta"
        }   // publish extra meta with the request
    },
    (status, response) => {
        this.response = response;
        done();
    });
});

Then('Method should return publish timetoken', function(done) {
    expect(this.response.timetoken).to.be.a('string');
    done();
});

When('I call publish by POST', function(done) {
this.pubnub.publish(
    {
        message: {
            complex: 'object'
        },
        channel: 'demo-channel',
        sendByPost: true,
        storeInHistory: false, 
        meta: {
            "cool": "meta"
        }   // publish extra meta with the request
    },
    (status, response) => {
        this.response = response;
        done();
    });
});
