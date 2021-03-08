const { When, Then } = require('cucumber');
const { expect } = require('chai');

// add channels
When('I request addChannels with apns2', function(done) {
this.pubnub.push.addChannels(
    {
        channels: ['ch1', 'ch2'],
        device: 'device1',
        pushGateway: 'apns2',
        topic: 'com.example.iosapp'
    },
    (status) => {
        this.addChannelsStatus = status;
        done();
    });
});

Then('I should get a valid response of addChannels for apns2', function(done) {
    expect(this.addChannelsStatus.error).to.equal(false);
    expect(this.addChannelsStatus.operation).to.equal('PNPushNotificationEnabledChannelsOperation');
    expect(this.addChannelsStatus.statusCode).to.equal(200);
    done();
});

// list channels
When('I request listChannels with apns2', function(done) {
this.pubnub.push.listChannels(
    {
        device: 'device1',
        pushGateway: 'apns2',
        topic: 'com.example.iosapp'
    },
    (status, response) => {
        this.listChannelsStatus = status;
        this.listChannelsResponse = response;
       done();
    });
});

Then('I should get a valid response of listChannels for apns2', function(done) {
    expect(this.listChannelsStatus.error).to.equal(false);
    expect(this.listChannelsStatus.operation).to.equal('PNPushNotificationEnabledChannelsOperation');
    expect(this.listChannelsStatus.statusCode).to.equal(200);
    expect(this.listChannelsResponse).to.have.a.property('channels');
    done();
});

// remove channels
When('I request removeChannels with apns2', function(done) {
this.pubnub.push.removeChannels(
    {
        channels: ['ch1', 'ch2'],
        device: 'device1',
        pushGateway: 'apns2',
        topic: 'com.example.iosapp'
    },
    (status) => {
        this.removeChannelsStatus = status;
        done();
    });
});

Then('I should get a valid response of removeChannels for apns2', function(done) {
    expect(this.removeChannelsStatus.error).to.equal(false);
    expect(this.removeChannelsStatus.operation).to.equal('PNPushNotificationEnabledChannelsOperation');
    expect(this.removeChannelsStatus.statusCode).to.equal(200);
    done();
});

// delete device - remove all push notifications
When('I request deleteDevice with apns2', function(done) {
this.pubnub.push.deleteDevice(
    {
        device: 'device1',
        pushGateway: 'apns2',
        topic: 'com.example.iosapp'
    },
    (status) => {
       this.deleteDeviceStatus = status;
       done();
    });
});

Then('I should get a valid response of deleteDevice for apns2', function(done) {
    expect(this.deleteDeviceStatus.error).to.equal(false);
    expect(this.deleteDeviceStatus.operation).to.equal('PNRemoveAllPushNotificationsOperation');
    expect(this.deleteDeviceStatus.statusCode).to.equal(200);
    done();
});
