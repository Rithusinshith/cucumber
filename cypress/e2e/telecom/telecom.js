
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
  

  And("receive the customer ID",()=>{

   let cellText
    cy.get('.table-wrapper').within(()=>{
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(2) h3').invoke('text').then(text => {
           cellText = text.trim(); // trim to remove any leading or trailing whitespace
           
           console.log(cellText)
            
        });    
        
    }) 

    cy.get('ul.actions').findByText('Home').click()

  })

  When("click on add Tariff Plan",()=>{

    
    cy.get('.right').findByRole('link', { name: /Add Tariff Plan/i }).click()


  })

  Then("I can fill the  details",()=>{

    cy.findByPlaceholderText('Monthly Rental').type('400')
    cy.findByPlaceholderText('Free Local Minutes').type('100')
    cy.findByPlaceholderText('Free International Minutes').type('100')
    cy.findByPlaceholderText('Free SMS Pack').type('500')
    cy.findByPlaceholderText('Local Per Minutes Charges').type('1')
    cy.findByPlaceholderText('Inter. Per Minutes Charges').type('5')
    cy.findByPlaceholderText('SMS Per Charges').type('1')


  })

  And("click the Tariff plans  submit button",()=>{

    cy.findByRole('button', { name: /SUBMIT/i }).click()
    cy.get('#main').should('contain','Congratulation you add Tariff Plan')

  })
  


