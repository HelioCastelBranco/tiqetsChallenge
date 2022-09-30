import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as HandPicked from '../page_objects/tiqets_hand-picked-combinations_page';

const museumEntranceText = "Entrance to the MoMA"
const empireStateText = "Admission to the Empire State Building" 

////////////////////////// Given ///////////////////////////////////

// Different methodogy: CODE without Page import procedure and using SWITCH statement
Given('already on {string} page', function (combType) {
    switch (combType) {
        case 'Search Museums & Attractions':
            cy.contains(museumEntranceText).should('be.visible')
            break
        case 'Statue of Liberty + Empire State Building': // It is juts an example
            cy.contains(empireStateText).should('be.visible')
            break
    }
})

////////////////////////// When ///////////////////////////////////

// Page Objects: Basic methodology (importing functions)
When('I click on SUMMIT One Vanderbilt and The Museum of Modern Art option', () => {
    HandPicked.optionValderbiltAndMuseum();
})

When('I click on BOOK NOW button', () => {
    HandPicked.bookNow();
})

////////////////////////// Then ///////////////////////////////////

Then('all details of this option appears correctly', () => {
    HandPicked.handPickedPageValidation();
})

Then('Ticket and Date flow performed successfully', () => {
    HandPicked.confirmOper();
})

////////////////////////// And ///////////////////////////////////

And('confirm that Hand-picked Combinations field is active', () => {
    HandPicked.handPickedField();
})

And('select a Date, Hour and Ticket to the Museum', () => {
    HandPicked.selectDate();
    HandPicked.selectHourTickMum();
})

And('select a Date, Hour and Ticket to Vanderbilt', () => {
    HandPicked.selectDate();
    HandPicked.selectHourTickVan();
})