/**
 * Setup based on Background
 */

const { Given } = require('cucumber');
const PubNub = require('pubnub');

Given('a pubnub instance with is available', function() {
  this.pubnub = new PubNub({
  publishKey: "demo-pubkey",
  subscribeKey: "demo-subkey",
  origin: 'localhost:4010',
  ssl: false,
  logVerbosity: true,
  uuid: "demo",
});});

