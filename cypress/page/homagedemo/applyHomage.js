
class applyHomePage {

    elements = {
        locationDDL: () => cy.get('#location'),
        locationSelect: () => cy.get('.MuiList-root > [tabindex="0"]'), // Need to change this elementID to a stable one.
        firstnameInput: () => cy.get('#firstName'),
        lastnameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#email'),
        phoneInput: () => cy.get('#phone'),
        dobInput: () => cy.get('#dob'),
        nationalityDDL: () => cy.get('#nationality'),
        nationalitySelect: () => cy.get('[data-value="Singapore Citizen"]'),
        hearAboutSelect: () => cy.get('[data-value="YouTube"]'),
        hearAboutDDL: () => cy.get('#source'),
        submitBtn: () => cy.get('.cpf-submit'),
        titleHeader: () => cy.get('h1'),
        yesBtn: () => cy.contains('Yes'),
        noBtn:() => cy.contains('No'),
        selectExperience: () =>  cy.contains('4 to 6'),
        selectRoles: () => cy.contains('Therapy Assistant'),
        selectJobOpportunities: () => cy.contains('Covid Assignments'),
        selectEngagementTypes: () => cy.contains('Freelance'),
        checkAcknowledgement: () => cy.get('.cpf-check'),


    }



    clickLocation() {
        this.elements.locationDDL().click();
    }
    slelectLocation() {
        this.elements.locationSelect().click();
    }

    typeFirstname(firstname) {
        this.elements.firstnameInput().type(firstname);
    }
    typeLastname(lastname) {
        this.elements.lastnameInput().type(lastname);
    }
    typeEmail(email) {
        this.elements.emailInput().type(email);
    }
    typePhone(phone) {
        this.elements.phoneInput().type(phone);
    }
    typeDob(dob) {
        this.elements.dobInput().type(dob);
    }

    clickHearAbout() {
        this.elements.hearAboutDDL().click();
    }
    selectHearAbout() {
        this.elements.hearAboutSelect().click();
    }

    selectNationality() {
        this.elements.nationalitySelect().click();
    }
    clickNationality() {
        this.elements.nationalityDDL().click();
    }

    clickSubmit() {
        this.elements.submitBtn().click();
    }
    clickYes() {
        this.elements.yesBtn().click();
    }
    clickNo() {
        this.elements.noBtn().click();
    }

    clickExperience() {
        this.elements.selectExperience().click();
    }
    clickRoles() {
        this.elements.selectRoles().click();
    }
    clickJobs() {
        this.elements.selectJobOpportunities().click();
    }
    clickEngagement() {
        this.elements.selectEngagementTypes().click();
    }

    clickAcknowledgement() {
        this.elements.checkAcknowledgement().click();
    }
}

module.exports = new applyHomePage();
