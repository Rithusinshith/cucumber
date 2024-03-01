import {Before, After,Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";


Before(() =>{
    cy.reload

})

After (()=>{

    cy.reload()

})

Given("Open newtours application",()=>{
    cy.visit("https://www.demo.guru99.com/test/newtours/")

})

// When("provide valid {string} and {string}",(userName,password) =>{
//     cy.get('[name="userName"]').type(userName)
//     cy.get('[name="password"]').type(password)

// })

When("I log in as following",(datatable)=>{

    datatable.hashes().forEach(element => {
        cy.get('[name="userName"]').type(element.userName)
        cy.get('[name="password"]').type(element.password)
        
    });
})

Then("click on submit button",()=>{
   cy.get('[name="submit"]').click()

})
And("verify the url should contains {string}",(url)=>{

    cy.url().should('contain',url)

})

