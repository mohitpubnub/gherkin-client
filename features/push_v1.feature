Feature: Push Notification v1
  Validate Push Notification v1 feature

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the addChannels method call
    When I request addChannels
    Then I should get a valid response of addChannels
    
  Scenario: check the listChannels method call
    When I request listChannels
    Then I should get a valid response of listChannels

  Scenario: check the removeChannels method call
    When I request removeChannels
    Then I should get a valid response of removeChannels

  Scenario: check the deleteDevice method call - remove all push notifications
    When I request deleteDevice
    Then I should get a valid response of deleteDevice