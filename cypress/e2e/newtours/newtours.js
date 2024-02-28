import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";

Given("Open newtours application",()=>{
    cy.visit("https://www.demo.guru99.com/test/newtours/")

})

When("provide valid {string} and {string}",(userName,password) =>{
    cy.get('[name="userName"]').type(userName)
    cy.get('[name="password"]').type(password)

})
Then("click on submit button",()=>{
   cy.get('[name="submit"]').click()

})
And("verify the url should contains {string}",(url)=>{

    cy.url().should('contain',url)

})

