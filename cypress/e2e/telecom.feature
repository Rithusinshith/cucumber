
Feature: Telecom project

    Scenario: Add a new customer to the Telecom company
    Given Open telecom application
    When click on add customer
    Then I can fill the customer details
    And click the submit button
    And receive the customer ID

    Scenario: Add a Tariff Plan
    Given Open telecom application
    When click on add Tariff Plan
    Then I can fill the  details
    And click the Tariff plans  submit button
   
