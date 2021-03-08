const { When, Then } = require('cucumber');
const { expect } = require('chai');

// add message actions
When('I request addMessageAction with valid parameters', function(done) {
this.pubnub.addMessageAction(
    {
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        action: {
            type: 'reaction',
            value: 'smiley_face',
        },
    },
    (status, response) => {
        this.addMessageActionStatus = status;
        this.addMessageActionResponse = response;
        done();
    });
});

Then('I should get a valid response for addMessageAction', function(done) {
    expect(this.addMessageActionStatus.error).to.equal(false);
    expect(this.addMessageActionStatus.operation).to.equal('PNAddActionOperation');
    expect(this.addMessageActionStatus.statusCode).to.equal(200);
    expect(this.addMessageActionResponse.data.type).to.equal('reaction');
    expect(this.addMessageActionResponse.data.value).to.equal('smiley_face');
    done();
});

// list message actions
When('I request getMessageActions with valid parameters', function(done) {
this.pubnub.getMessageActions(
    {
        channel: 'channel1',
        start: '15610547826970041',
        end: '15610547826970040',
        limit: 100,
    },
    (status, response) => {
        this.getMessageActionStatus = status;
        this.getMessageActionResponse = response;
        done();
    });
});

Then('I should get a list of asked message actions', function(done) {
    expect(this.getMessageActionStatus.error).to.equal(false);
    expect(this.getMessageActionStatus.operation).to.equal('PNGetMessageActionsOperation');
    expect(this.getMessageActionStatus.statusCode).to.equal(200);
    expect(this.getMessageActionResponse.data[0].type).to.equal('reaction');
    expect(this.getMessageActionResponse.data[0].value).to.equal('smiley_face');
    done();
});

// remove message actions
When('I request removeMessageAction with valid parameters', function(done) {
this.pubnub.removeMessageAction(
    {
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        actionTimetoken: '15610547826970040',
    },
    (status) => {
        this.removeMessageActionStatus = status;
        done();
    });
});

Then('I should get valid response for removeMessageAction', function(done) {
    expect(this.removeMessageActionStatus.error).to.equal(false);
    expect(this.removeMessageActionStatus.operation).to.equal('PNRemoveMessageActionOperation');
    expect(this.removeMessageActionStatus.statusCode).to.equal(200);
    done();
});