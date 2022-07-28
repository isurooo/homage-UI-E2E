/// <reference types="Cypress" />

describe('Get URL', () => {
  it('Access the homage homepage', () => {
   cy.visit('/')
  })

  describe('Click submit button', () => {
    it("User details", () => {
      cy.get('#firstName').type('Bob')
      cy.get('#lastName').type('Peter')

      var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
      var randomString = '';
      for (var i = 0; i < 15; i++) {
        randomString += chars[Math.floor(Math.random() * chars.length)];
      }
      cy.get('#email').type(randomString + '@homage.com')

      cy.get('#phone').type('82600000')
      cy.get('#dob').type('12/10/1989')

      cy.get('#nationality').click()

      cy.get('[data-value="Singapore Citizen"]').click()

      cy.get(':nth-child(6) > .h > .cpf-r20').click()
      cy.get(':nth-child(7) > .cpf-sec > :nth-child(2)').click()
      cy.get(':nth-child(9) > :nth-child(1)').click()


      cy.get(':nth-child(11) > .cpf-sec > :nth-child(1)').click()
      cy.get(':nth-child(12) > .cpf-sec > :nth-child(2)').click()
      cy.get(':nth-child(16) > .cpf-r20').click()

      cy.get('#source').click()
      cy.get('[data-value="YouTube"]').click()

      cy.get('.cpf-check').click()
  //   //  cy.get('.cpf-submit').click()

    })

  })

})

