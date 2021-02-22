const { When, Then } = require('cucumber');
const { expect } = require('chai');

When('I request fetchMessages with include message actions', function(done) {
this.pubnub.fetchMessages(
    {
        channels: ['ch1'],
        start: "15343325214676133",
        end: "15343325004275466",
        includeMessageActions: true,
        count: 25
    },
    (status, response) => {
        this.fetchMessagesResponse = response;
        done();
    });
});

Then('I should get a valid response with message actions', function(done) {
    expect(this.fetchMessagesResponse).to.have.deep.property('channels');
    expect(this.fetchMessagesResponse).to.have.nested.property('channels.demo-channel')
    expect(this.fetchMessagesResponse.channels['demo-channel'][0]).to.have.a.property('actions');
    done();
});