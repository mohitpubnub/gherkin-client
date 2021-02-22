Feature: Historyv3
  Validate that History v3 api in SDK is working

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the fetchMessages
    When I request fetchMessages
    Then I should get a valid response of fetchMessages

  Scenario: check the messageCounts
    When I request messageCounts
    Then I should get a valid response for messageCounts

  Scenario: check the deleteMessages
    When I request deleteMessages
    Then I should get a valid response for deleteMessages  