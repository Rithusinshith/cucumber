Feature: newtours validation

Scenario: Home Page
    Given Open newtours application
    When provide valid 'selenium' and 'selenium'
    Then click on submit button
    And verify the url should contains 'newtours/login_sucess'
   