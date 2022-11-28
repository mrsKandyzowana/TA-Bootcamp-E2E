Feature: Bootcamp E2E hometask

  Background: 
    Given I am on the home page
    When I close the promo banner if it appears

  Scenario: Search bar
    When I enter the word 'Windows' in the search bar
    And I click the search
    Then I Check that at least one item appears

  Scenario: Internet shop logo button
    When I open 'Today's Best Deals' tab
    And I click on the Internet shop logo
    Then I expect that the main page opened
