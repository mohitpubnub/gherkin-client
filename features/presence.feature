Feature: Presence
  Validate message actions feature in SDK

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the hereNow method call
    When I request hereNow with valid parameters
    Then I should get a valid response for hereNow with channels

  Scenario: check the whereNow method call
    When I request whereNow with valid parameters
    Then I should get a valid response for whereNow for asked uuid

  Scenario: check the setState method call
    When I request setState with valid parameters
    Then I should get a valid response for setState

  Scenario: check the getState method call
    When I request getState with valid parameters
    Then I should get a valid response for getState  
