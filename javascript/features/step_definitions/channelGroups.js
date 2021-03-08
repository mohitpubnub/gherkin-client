const { When, Then } = require('cucumber');
const { expect } = require('chai');

// add channels to channel group
When('I request addChannels for channelGroups', function(done) {
this.pubnub.channelGroups.addChannels(
    {
        channels: ['ch1', 'ch2'],
        channelGroup: "channelGroup1"
    },
    (status) => {
        this.addChannelsStatus = status;
        done();
    });
});

Then('I should get a valid response for addChannels of channelGroups', function(done) {
    expect(this.addChannelsStatus.error).to.equal(false);
    expect(this.addChannelsStatus.operation).to.equal('PNAddChannelsToGroupOperation');
    expect(this.addChannelsStatus.statusCode).to.equal(200);
    done();
});

// list channels of channel group
When('I request listChannels of a channelGroup', function(done) {
this.pubnub.channelGroups.listChannels(
    {
        channelGroup: "channelGroup1"
    },
    (status, response) => {
        this.listChannelsStatus = status;
        this.listChannelsResponse = response;
       done();
    });
});

Then('I should get a list of channels for given channelGroup', function(done) {
    expect(this.listChannelsStatus.error).to.equal(false);
    expect(this.listChannelsStatus.operation).to.equal('PNChannelsForGroupOperation');
    expect(this.listChannelsStatus.statusCode).to.equal(200);
    expect(this.listChannelsResponse).to.have.a.property('channels');
    expect(this.listChannelsResponse.channels[0]).to.equal('channel1');
    done();
});

// remove channels from channel group
When('I request removeChannels of a channelGroup', function(done) {
this.pubnub.channelGroups.removeChannels(
    {
        channels: ['ch2'],
        channelGroup: 'channelGroup1'
    },
    (status) => {
        this.removeChannelsStatus = status;
        done();
    });
});

Then('I should get a valid response of removeChannels of channelGroup', function(done) {
    expect(this.removeChannelsStatus.error).to.equal(false);
    expect(this.removeChannelsStatus.operation).to.equal('PNRemoveChannelsFromGroupOperation');
    expect(this.removeChannelsStatus.statusCode).to.equal(200);
    done();
});

// delete channel group
When('I request deleteGroup', function(done) {
this.pubnub.channelGroups.deleteGroup(
    {
        channelGroup: "family"
    },
    (status) => {
        this.removeGroupStatus = status;
        done();
    });
});

Then('I should get a valid response of deleteGroup', function(done) {
    expect(this.removeGroupStatus.error).to.equal(false);
    expect(this.removeGroupStatus.operation).to.equal('PNRemoveGroupOperation');
    expect(this.removeGroupStatus.statusCode).to.equal(200);
    done();
});