import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";

Given("Open newtours application",()=>{
    cy.visit("https://www.demo.guru99.com/test/newtours/")

})

When("provide valid username and password",() =>{
    cy.get('[name="userName"]').type('selenium')
    cy.get('[name="password"]').type('selenium')

})
Then("click on submit button",()=>{
   cy.get('[name="submit"]').click()

})
And("verify the url of the page",()=>{

    cy.url().should('contain','newtours/login_sucess')

})

