/// <reference types="Cypress" />
 import applyHomagePage from '../page/homagedemo/applyHomage'

describe('Get URL', () => {
  it('Access the homage homepage', () => {
   cy.visit('https://apply.homage.sg/');
  })

  describe('Enter user details', () => {
    it("Submit user details", () => {
      applyHomagePage.typeFirstname('Michael');
      applyHomagePage.typeLastname('Jordan');

      var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
      var randomString = '';
      for (var i = 0; i < 15; i++) {
        randomString += chars[Math.floor(Math.random() * chars.length)];
      }
      applyHomagePage.typeEmail(randomString + '@homage.com');
      
      applyHomagePage.typePhone('82860123');
      applyHomagePage.typeDob('12/10/1989');
      applyHomagePage.clickNationality();
      applyHomagePage.selectNationality();

      cy.get(':nth-child(6) > .h > .cpf-r20').click()
      cy.get(':nth-child(7) > .cpf-sec > :nth-child(2)').click()
      cy.get(':nth-child(9) > :nth-child(1)').click()

      cy.get(':nth-child(11) > .cpf-sec > :nth-child(1)').click()
      cy.get(':nth-child(12) > .cpf-sec > :nth-child(2)').click()
      cy.get(':nth-child(16) > .cpf-r20').click()

      applyHomagePage.clickHearAbout();
      applyHomagePage.selectHearAbout();

      cy.get('.cpf-check').click()

      //Click submit
    // applyHomagePage.clickSubmit()
     //Verify the title after submit
     applyHomagePage.elements.titleHeader().should('have.text','Your application has been submitted!')

    })

  })

})

