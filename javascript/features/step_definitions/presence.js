const { When, Then } = require('cucumber');
const { expect } = require('chai');

// hereNow
When('I request hereNow with valid parameters', function(done) {
this.pubnub.hereNow(
    {
        channels: ['ch1', 'ch2'],
        includeUUIDs: true,
        includeState: true
    },
    (status, response) => {
        this.hereNowStatus = status;
        this.hereNowResponse = response;
        done();
    });
});

Then('I should get a valid response for hereNow with channels', function(done) {
    expect(this.hereNowStatus.error).to.equal(false);
    expect(this.hereNowStatus.operation).to.equal('PNHereNowOperation');
    expect(this.hereNowStatus.statusCode).to.equal(200);
    expect(this.hereNowResponse.channels.ch2.occupants[0].uuid).to.equal('uuid-2');
    expect(this.hereNowResponse.channels.ch2.occupants[0].state.user).to.equal('user2');
    done();
});

// whereNow
When('I request whereNow with valid parameters', function(done) {
this.pubnub.whereNow(
    {
        uuid: "uuid-1"
    },
    (status, response) => {
        this.whereNowStatus = status;
        this.whereNowResponse = response;
        done();
    });
});

Then('I should get a valid response for whereNow for asked uuid', function(done) {
    expect(this.whereNowStatus.error).to.equal(false);
    expect(this.whereNowStatus.operation).to.equal('PNWhereNowOperation');
    expect(this.whereNowStatus.statusCode).to.equal(200);
    expect(this.whereNowResponse.channels).to.include('ch1');
    done();
});

// set state
When('I request setState with valid parameters', function(done) {
this.pubnub.setState(
    {
        state: {"text":"hey"},
        channels: ['ch1'],
    },
    (status, response) => {
        this.setStateStatus = status;
        this.setStateResponse = response;
        done();
    });
});

Then('I should get a valid response for setState', function(done) {
    expect(this.setStateStatus.error).to.equal(false);
    expect(this.setStateStatus.operation).to.equal('PNSetStateOperation');
    expect(this.setStateStatus.statusCode).to.equal(200);
    expect(this.setStateResponse.state.text).to.equal('hey');
    done();
});

// get state
When('I request getState with valid parameters', function(done) {
this.pubnub.getState(
    {
        uuid: "uuid-1",
        channels: ['ch1'],
    },
    (status, response) => {
        this.getStateStatus = status;
        this.getStateResponse = response;
        done();
    });
});

Then('I should get a valid response for getState', function(done) {
    expect(this.getStateStatus.error).to.equal(false);
    expect(this.getStateStatus.operation).to.equal('PNGetStateOperation');
    expect(this.getStateStatus.statusCode).to.equal(200);
    console.log('RESPONSE JSON-> ', JSON.stringify(this.getStateResponse));
    // expect(this.getStateResponse.channels.ch1).to.equal('hey');
    done();
});