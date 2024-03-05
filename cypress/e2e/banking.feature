Feature: Banking project

    Scenario: login to the banking site
    Given Open the banking application
    When I log in using 'mngr556197' and 'ezeteny'
    Then click on Log in button
    And verify the title should contains 'Gtpl Bank'
    And verify the navigation menu items


    Scenario: Create a new customer
    Given Open the Insurance application
    When I log in using 'mngr556197' and 'ezeteny'
    Then click on Log in button
    And verify the title should contains 'Gtpl Bank'
    And verify the navigation menu items
    And I can create a new customer

    Scenario: Update the customer details
    Given Open the Insurance application
    When I log in using 'mngr556197' and 'ezeteny'
    Then click on Log in button
    And verify the title should contains 'Gtpl Bank'
    And verify the navigation menu items
    And I can create a new customer
    And I can update the customer details

    Scenario: Delete the customer details
    Given Open the Insurance application
    When I log in using 'mngr556197' and 'ezeteny'
    Then click on Log in button
    And verify the title should contains 'Gtpl Bank'
    And verify the navigation menu items
    And I can create a new customer
    And I can update the customer details
    Then I can delete the customer details


