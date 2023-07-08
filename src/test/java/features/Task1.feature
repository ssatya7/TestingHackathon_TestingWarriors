@Admin
Feature: TESTING HACKATHON - TESTING WARRIORS

  Background:
    Given I launched IPL20 website

  @Regression @Sanity @BasicSanity @T
  Scenario: [TEST_01] Get Player
    And User Go to STATS Menu on Top
    And User assert that Season Tab is selected by default.
    And User select batters Checkbox
    And User select Most Fours Value
    And I fetch the data from stats for UI Screen
    And I get player name from post request