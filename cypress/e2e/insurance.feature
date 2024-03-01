Feature: Insurance project

    Scenario: login to the insurance site
    Given Open the Insurance application
    When I log in using 'selenium@test.com' and 'selenium'
    Then click on Log in button
    And verify the title should contains 'Broker Insurance WebPage'
    And verify the navigation menu items


    Scenario: Request a Quotation
    Given Open the Insurance application
    When I log in using 'selenium@test.com' and 'selenium'
    Then click on Log in button
    And verify the title should contains 'Broker Insurance WebPage'
    And verify the navigation menu items
    And I can request and retrieve a quotation
