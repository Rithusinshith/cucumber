
/// <reference types="Cypress" />
import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";

  Given('Open telecom application',()=>
  {

    cy.visit('https://demo.guru99.com/telecom/index.html')

  }) 

  When("click on add customer",()=>{

    cy.findByRole('link', { name: /Add Customer/i }).click()

  })

  Then("I can fill the customer details",()=>{

    cy.get('input#done').check({force: true})
    cy.findByPlaceholderText('FirstName').type('Rithu')
    cy.findByPlaceholderText('LastName').type('Raj')
    cy.findByPlaceholderText('Email').type('Raj@test.com')
    cy.findByPlaceholderText('Enter your address').type('15 test street Mp2019')
    cy.findByPlaceholderText('Mobile Number').type('0987655')
    
  })
 
  And("click the submit button",()=>{

    cy.findByRole('button', { name: /SUBMIT/i }).click()

  })
 