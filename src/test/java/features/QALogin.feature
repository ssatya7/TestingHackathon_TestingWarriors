@Admin
Feature: TESTING HACKATHON - TESTING WARRIORS

  Background:
    Given I launched pulsepoint application

  @Regression @Sanity @BasicSanity @T
  Scenario: [QA_Login_01] Verify QA Login Functionality
    When I enter userName and password in QA demo
    And I clicked on login button
    Then I assert that login was successful