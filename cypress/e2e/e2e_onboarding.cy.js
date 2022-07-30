/// <reference types="Cypress" />
import applyHomagePage from '../page/homagedemo/applyHomage'

describe('Get URL', () => {
    it('Access the homage homepage', () => {
        cy.visit('/');
    })

    describe('Enter user details', () => {
        it("Successfully submit user details", () => {

            applyHomagePage.clickLocation();
            applyHomagePage.slelectLocation();
            //Basic Details
            applyHomagePage.typeFirstname('Michael');
            applyHomagePage.typeLastname('Jordan');
            applyHomagePage.typeEmail(applyHomagePage.getRandomEmail() + '@homage.com');

            applyHomagePage.typePhone('82860123');
            applyHomagePage.typeDob('12/10/1989');
            applyHomagePage.clickNationality();
            applyHomagePage.selectNationality();
            //Roles
            applyHomagePage.clickYes();
            applyHomagePage.clickExperience();
            applyHomagePage.clickRoles();
            // Job Opportunities
            applyHomagePage.clickJobs();
            // Engagement Types
            applyHomagePage.clickEngagement();
            //   Background Check
            applyHomagePage.clickNo();
            applyHomagePage.clickHearAbout();
            applyHomagePage.selectHearAbout();
            // Declaration
            applyHomagePage.clickAcknowledgement();
            applyHomagePage.clickSubmit()
            //Verify the title after submit
            applyHomagePage.elements.titleHeader().should('have.text', 'Your application has been submitted!')

        })

    })

    describe('Validate required fields', () => {
        it("Validate email format | Validate phone number format | Validate required fields ", () => {

        })

    })

})

