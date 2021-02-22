Feature: Time
  Validate that the Time method in SDKs is working

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the time
    When I request the time
    Then the time should be returned