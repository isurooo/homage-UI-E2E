/// <reference types="Cypress" />
import applyHomagePage from '../page/homagedemo/applyHomage'

describe('Get URL', () => {
    it('Access the homage homepage', () => {
        cy.visit('/');
    })

    describe('Validate required fields', () => {
        it('Validate submit empty appplication', () => {
            applyHomagePage.clickSubmit();
            applyHomagePage.elements.declarationError().contains('Required');

        })
        it('Validate submit with invalid details', () => {
            applyHomagePage.typeFirstname(' ');
            applyHomagePage.typeLastname(' ');
            applyHomagePage.typeEmail('abc@com'); // Wrong format
            applyHomagePage.typePhone('123456789'); //  Contains 9 digits
            applyHomagePage.typeDob('12/29/1989'); // Wrong date format: MM/DD/YYYY
            applyHomagePage.clickSubmit();
            applyHomagePage.elements.firstNameError().contains('Required');
            applyHomagePage.elements.lastNameError().contains('Required');
            applyHomagePage.elements.emailError().contains('Invalid email')
            applyHomagePage.elements.phoneError().contains('Incorrect phone number');
            applyHomagePage.elements.dobError().contains('Invalid Date');
            applyHomagePage.elements.declarationError().contains('Required');

        })
        it('Validate submit with last name empty', () => {
      
            applyHomagePage.clickLocation();
            applyHomagePage.slelectLocation();
            applyHomagePage.typeFirstname('Michael');
            applyHomagePage.typeLastname(' ');
            applyHomagePage.typeEmail(applyHomagePage.getRandomEmail() + '@homage.com');
            applyHomagePage.typePhone('82860123');
            applyHomagePage.typeDob('12/10/1989');
            applyHomagePage.clickNationality();
            applyHomagePage.selectNationality();
            applyHomagePage.clickYes();
            applyHomagePage.clickExperience();
            applyHomagePage.clickRoles();
            applyHomagePage.clickJobs();
            applyHomagePage.clickEngagement();
            applyHomagePage.clickNo();
            applyHomagePage.clickHearAbout();
            applyHomagePage.selectHearAbout();
            applyHomagePage.clickAcknowledgement();
            applyHomagePage.clickSubmit()
            applyHomagePage.elements.lastNameError().contains('Required');
        })
    })
})