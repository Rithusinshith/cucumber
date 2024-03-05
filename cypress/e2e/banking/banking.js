
  /// <reference types="Cypress" />
  import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";

  Given('Open the Insurance application',()=>{
    cy.visit('https://demo.guru99.com/V1/index.php')
  })

  When("I log in using 'mngr556197' and 'ezeteny'",()=>{
    cy.get('[name="userName"]').type('mngr556197')
    cy.get('[name="password"]').type('ezeteny')

  }) 
  
  Then('click on Log in button',()=>{

    cy.get('[name="btnLogin"]').click()

  }) 

  And ("verify the title should contains 'Gtpl Bank'",()=>{

    cy.get('h2').should('contain','Gtpl Bank')

  })

  And ("verify the navigation menu items",()=>{

    cy.get('.menusubnav li').should(($menu) => {
        expect($menu).to.have.length(10)
        expect($menu.eq(0)).to.contain('Manager')
        expect($menu.eq(1)).to.contain('New Customer')
        expect($menu.eq(2)).to.contain('Edit Customer')
        expect($menu.eq(3)).to.contain('Delete Customer')
        expect($menu.eq(4)).to.contain('New Account')
        expect($menu.eq(5)).to.contain('Edit Account')
        expect($menu.eq(6)).to.contain('Delete Account')
        expect($menu.eq(7)).to.contain('Mini Statement')
        expect($menu.eq(8)).to.contain('Customised Statement')
        expect($menu.eq(9)).to.contain('Log out')

    })


  })


  And ("I can create a new customer",()=>{

    cy.findByText('New Customer').click()
    cy.get('[name="name"]').type('Rithu')
    cy.get('[name="rad1"]').check('female')
    cy.get('[name="dob"]').check('18/02/2000')
    cy.get('[name="addr"]').type('test')
    cy.get('[name="city"]').type('testCity')
    cy.get('[name="state"]').type('testState')
    cy.get('[name="pinno"]').type('278645')
    cy.get('[name="telephoneno"]').type('6554333')
    cy.get('[name="emailid"]').type('rr@t.com')
    cy.findByText('Submit').click()



  })


  And ("I can update the customer details",()=>{

  })

  And ("Then I can delete the customer details",()=>{

  })




