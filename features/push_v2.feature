Feature: Push Notification v2 - APNS2
  Validate Push Notification v1 feature

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the addChannels method call with APNS2
    When I request addChannels with apns2
    Then I should get a valid response of addChannels for apns2
    
  Scenario: check the listChannels method call with APNS2
    When I request listChannels with apns2
    Then I should get a valid response of listChannels for apns2

  Scenario: check the removeChannels method call with APNS2
    When I request removeChannels with apns2
    Then I should get a valid response of removeChannels for apns2

  Scenario: check the deleteDevice method call with APNS2- remove all push notifications
    When I request deleteDevice with apns2
    Then I should get a valid response of deleteDevice for apns2