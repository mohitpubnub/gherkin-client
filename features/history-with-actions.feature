Feature: History-with-actions
  Validate that History with actions api in SDK is working

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the fetchMessages
    When I request fetchMessages with include message actions
    Then I should get a valid response with message actions