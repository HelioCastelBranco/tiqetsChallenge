/// <reference types="Cypress"/>
import * as hooks from '../hooks'
const dayjs = require('dayjs')

const URL = 'https://www.tiqets.com/en/new-york-attractions-c260932/'
const vanderbiltMuseumOption = " SUMMIT One Vanderbilt + The Museum of Modern Art "
const selectSpecDate = "Select a date"
const selectTicket = "Select your tickets"
const bookNowOp = "Book now"
const museumEntranceText = "Entrance to the MoMA"
const saveContinueBtn = "Save and continue"
const dayPicker = ".DayPicker-NavBar"
const goToNextStep = "Go to the next step"
const ticketAdult = ":nth-child(2) > .pa16 > .flex-column > .QuantitySelector > :nth-child(3) > .Icon > path"
const timeSlotMu = "/html/body/div[4]/div/div/div[2]/div/div[1]/div/div[1]/div[1]/div[3]/div/div/div/div/select"
const timeSlotVan = "/html/body/div[4]/div/div/div[2]/div/div[1]/div/div[2]/div[1]/div[2]/div/div/div/div/select"

// To validate if 'SUMMIT One Vanderbilt + The Museum of Modern Art field' appears on home page
export function handPickedField() {
    cy.contains(vanderbiltMuseumOption).should('be.visible')
}

// To click on " SUMMIT One Vanderbilt + The Museum of Modern Art option "
export function optionValderbiltAndMuseum() {
    cy.visit(URL)
    cy.contains(vanderbiltMuseumOption).should('be.visible').click()
}

// To validate if 'SUMMIT One Vanderbilt + The Museum of Modern Art' page is opened
export function handPickedPageValidation() {
    cy.contains(museumEntranceText).should('be.visible')
    // Logs
    hooks.basicLog('SUMMIT One Vanderbilt + The Museum of Modern Art page is successfully opened')
}

// To book your visit
export function bookNow() {
    cy.contains(bookNowOp).should('be.visible').click()
}

// To select date
export function selectDate() {
    cy.get('span').contains(selectSpecDate).should('be.visible').click()
    // To confirm if it is the correct field
    cy.get(dayPicker).should('have.length', 1)
    cy.log(dayjs().format('DD-MM-YYYY'))  //Prints todays date
    cy.wait(1000)

    // Choose a day (Today)
    cy.get('.DayPicker-Day--today').click();
    // Logs
    hooks.basicLog('Date select operation is working correctly')
}

// To define hour and ticket kind of Museum
export function selectHourTickMum() {
    // Choose a timeslot
    cy.xpath(timeSlotMu).select("16:30")
    cy.get('span').contains(selectTicket).should('be.visible').click()
    cy.get(ticketAdult).click()
    // To Save the procedure
    cy.contains(saveContinueBtn).click()
    cy.wait(1000)
}

// To define hour and ticket kind of Vanderbilt
export function selectHourTickVan() {
    // Choose a timeslot
    cy.xpath(timeSlotVan).select("20:00")
    cy.get('span').contains(selectTicket).should('be.visible').click()
    cy.get(ticketAdult).click()
    // To Save the procedure
    cy.contains(saveContinueBtn).click()
    cy.wait(1000)
}

// To confirm your visit schedule
export function confirmOper() {
    // To go to next step (Personal Information Page)
    cy.contains(goToNextStep).click()
    // Logs
    hooks.basicLog('schedule visit procedure is working correctly')
}
