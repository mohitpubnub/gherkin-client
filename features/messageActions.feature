Feature: Message Actions
  Validate message actions feature in SDK

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the addMessageAction method call
    When I request addMessageAction with valid parameters
    Then I should get a valid response for addMessageAction

  Scenario: check the getMessageActions method call
    When I request getMessageActions with valid parameters
    Then I should get a list of asked message actions

  Scenario: check the removeMessageAction method call
    When I request removeMessageAction with valid parameters
    Then I should get valid response for removeMessageAction


