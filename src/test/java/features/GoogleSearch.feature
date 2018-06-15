Feature: Google Search

  Background: 
    Given I open a browser
    And I navigate to google page

  Scenario Outline: Validate google search text field
    Then I validate the search tesxt field

