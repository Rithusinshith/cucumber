Feature: newtours validation

Background:

@smoke @sanity
Scenario: Home Page
    Given Open newtours application
    When I log in as following
    |userName|password|
    |selenium|selenium|
    Then click on submit button
    And verify the url should contains 'newtours/login_sucess'


Scenario: Verifying the Title
    Given Open newtours application
    When I log in as following
    |userName|password|
    |selenium|selenium|
    Then click on submit button
    And verify the url should contains 'newtours/login_sucess'
   