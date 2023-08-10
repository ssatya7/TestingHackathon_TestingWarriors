@Admin
Feature: TESTING HACKATHON - Task StepIn

  @T
  @Regression @Sanity @BasicSanity
  Scenario: Task Step IN
    Given I launched twitter website and naviagete to stepin_forum
    When I scroll down till top 50 tweets are displayed
    Then I Extract tweet with most retweets from top 50 tweets
    And I Extract tweet with most likes from top 50 tweets
    And I Extract highest used Hashtag from top 50 tweets