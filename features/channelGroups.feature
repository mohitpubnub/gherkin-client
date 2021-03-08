Feature: Channel Groups
  Validate Channel Groups feature

  Background:
    Given a pubnub instance with is available
  
  Scenario: check the addChannels method call for channelGroups
    When I request addChannels for channelGroups
    Then I should get a valid response for addChannels of channelGroups
    
  Scenario: check the listChannels method call for channelGroups
    When I request listChannels of a channelGroup
    Then I should get a list of channels for given channelGroup

  Scenario: check the removeChannels method call for channelGroups
    When I request removeChannels of a channelGroup
    Then I should get a valid response of removeChannels of channelGroup

  Scenario: check the delete channelGroup feature
    When I request deleteGroup
    Then I should get a valid response of deleteGroup