const { When, Then } = require('cucumber');
const { expect } = require('chai');

When('I request fetchMessages', function(done) {
this.pubnub.fetchMessages(
    {
        channels: ['ch1', 'ch2', 'ch3'],
        start: "15343325214676133",
        end: "15343325004275466",
        count: 25
    },
    (status, response) => {
        this.fetchMessagesResponse = response;
        done();
    });
});

Then('I should get a valid response of fetchMessages', function(done) {
    expect(this.fetchMessagesResponse).to.have.deep.property('channels');
    expect(this.fetchMessagesResponse).to.have.nested.property('channels.demo-channel')
    expect(this.fetchMessagesResponse.channels['demo-channel'][0]).to.have.a.property('messageType');
    done();
});


When('I request messageCounts', function(done) {

    this.pubnub.messageCounts({ channels: ['ch1'], timetoken: 16495750401727567 },
        (status, response) => {
            this.messageCountsResponse = response;
      done();
    });
});

Then('I should get a valid response for messageCounts', function() {
      expect(this.messageCountsResponse.channels).to.deep.equal({ myChannel1: 33, myChannel2: 0 });
});

When('I request deleteMessages', function(done) {

    this.pubnub.deleteMessages(
    {
        channel: 'ch1'
    },
    (response) => {
        console.log('RESPONSE------->>>>>', JSON.stringify(response));
        this.deleteMessagesResponse = response;
        console.log('operation ----->>>>>', response.operation);
        done();
    });
});

Then('I should get a valid response for deleteMessages', function() {
      expect(this.deleteMessagesResponse.operation).to.equal('PNDeleteMessagesOperation');
});