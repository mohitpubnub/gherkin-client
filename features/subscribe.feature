Feature: Subscribe
  Validate that Subscribe api in SDK is working

  Background:
    Given a pubnub instance with is available
  
  Scenario: check subscribe method
    When I call subscribe
    Then channel should be subscribed