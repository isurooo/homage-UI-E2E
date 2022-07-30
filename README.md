# Homage-UI-E2E
## Homage Care Pro onboarding flow UI e2e automation.


This repo contains a e2e test and the functional test for the Homage application module. 

e2e automation test covers the working order of the application page in a start-to-finish process.

Functional test covers the validation of the application page.

## Help + Testing
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

### 1. Install Cypress
```
npm install cypress
```
[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)


### 2. Clone this repo
1. git clone https://github.com/isurooo/homage-UI-E2E.git

2.  cd into the cloned repo.
<folder path>/Homage_UI_e2e



### 3. Open / Run the cypress test
1. Open the project using IDE.
2. cd into the cloned repo using the terminal.
3. < your folder path > /Homage_UI_e2e


### How to open the Cypress test



1. Run 
```
npm run cypress:open
```


This opens the cypress application.

2. You are at the `Welcome to Cypress` screen.
3. Select the `E2E Testing` which has already configured .
4. Choose a Browser ( Chrome Or Edge ).
5. Select `Specs` from the left menu.
6. Under E2E specs, 

    i. Select `e2e_onboarding.cy.js` for the e2e test.
    
    ii. Select `func_formValidation.cy.js` for the functional test.  

 
### How to run the Cypress test

1. Run
```
npm run cypress:run
```
This opens the headless browser testing.












[![Homage_UI_e2e](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/e6kf48&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/e6kf48/runs)