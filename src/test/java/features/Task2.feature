@Admin
Feature: TESTING HACKATHON - Task 2

  Background:
    Given I launched IPL20 website

  @Regression @Sanity @BasicSanity
  Scenario: Team with Trophies
    Given I navigate to Teams tab
    When I hit IPL20 teams endpoint and retrieve team name
    And I hover on the IPL website with retrieved Team name and pick trophies won by respective team
    Then I send post request with team details and years of Trophies and validate success response