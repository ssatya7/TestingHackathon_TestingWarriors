@Admin
Feature: TESTING HACKATHON - TESTING WARRIORS

  Background:
    Given I launched IPL20 website

  @Regression @Sanity @BasicSanity @T
  Scenario: [TEST_01] Get Player
    Given User Go to STATS Menu on Top
    Then User assert that Season Tab is selected by default.
    When User select batters Checkbox
    And User select Most Fours Value
    And I fetch the data from stats for UI Screen
    #When I create API Request and send Post call
    