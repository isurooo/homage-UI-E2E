
class applyHomePage{

    elements ={
        firstnameInput:() =>   cy.get('#firstName'),
        lastnameInput:() =>   cy.get('#lastName'),
        emailInput:() =>   cy.get('#email'),
        phoneInput:() =>   cy.get('#phone'),
        dobInput:() =>   cy.get('#dob'),
        nationalityDDL:() =>   cy.get('#nationality'),
        nationalitySelect:()=> cy.get('[data-value="Singapore Citizen"]'),
        hearAboutSelect:()=> cy.get('[data-value="YouTube"]'), 
        hearAboutDDL: ()=> cy.get('#source'),
        submitBtn:() => cy.get('.cpf-submit'),
        titleHeader:()=> cy.get('h1'),
        
    }

typeFirstname(firstname){
    this.elements.firstnameInput().type(firstname);
}
typeLastname(lastname){
    this.elements.lastnameInput().type(lastname);
}
typeEmail(email){
    this.elements.emailInput().type(email);
}
typePhone(phone){
    this.elements.phoneInput().type(phone);
}
typeDob(dob){
    this.elements.dobInput().type(dob);
}

clickHearAbout(){
    this.elements.hearAboutDDL().click();
}
selectHearAbout(){
    this.elements.hearAboutSelect().click();
}
selectNationality(){
    this.elements.nationalitySelect().click();
}
clickNationality(){
    this.elements.nationalityDDL().click();
}
clickSubmit(){
this.elements.submitBtn().click();
}



}

module.exports = new applyHomePage();
