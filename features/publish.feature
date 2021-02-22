Feature: Publish
  Validate that Publish api in SDK is working

  Background:
    Given a pubnub instance with is available
  
  Scenario: check publish method
    When I call publish
    Then Method should return publish timetoken

  Scenario: check publish POST method
    When I call publish by POST
    Then Method should return publish timetoken