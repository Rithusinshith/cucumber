Feature: newtours validation

Scenario: Home Page
    Given Open newtours application
    When provide valid username and password
    Then click on submit button
    And verify the url of the page