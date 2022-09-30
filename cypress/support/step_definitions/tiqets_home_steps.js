import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as HomePage from '../page_objects/tiqets_home_page';

////////////////////////// Given ///////////////////////////////////
// Validate the Tiqets Home Page
Given('already on Tiqets page', () => {
    HomePage.firstPage();
})

////////////////////////// When ///////////////////////////////////
When('I click on Search Museums & Attractions field', () => {
    HomePage.searchOperation();
})

////////////////////////// Then ///////////////////////////////////
Then('best places to visit in Australia is showed successfully', () => {
    HomePage.australiaResult();
})