/// <reference types="Cypress"/>
import * as hooks from '../hooks'

const URL = 'https://www.tiqets.com/en/new-york-attractions-c260932/'
const attractionsField = "Attractions"
const HandPickedCombText = "Hand-picked combinations"
const search = ".SearchAutocomplete"
const placeName = "Australia"
const australiaInfo = "Things to do in Melbourne"

export function firstPage() {
    cy.visit(URL)
    // To validate "Attractions", "Hand-picked combinations" and "Search"
    cy.get('span').contains(attractionsField).should('be.visible')
    cy.contains(HandPickedCombText).should('be.visible')
    cy.get(search).should('exist')
    // To validate "Hand-picked combinations" field
    cy.get('[data-track-metadata-query="recommendation_cards: lists.top_venues.items"] > .Grid').each(($el) => {
        if ($el.text() === "Hand-picked combinations") {
            cy.wrap($el).should('have.text', 'Hand-picked combinations')
        }
    })
    // LOGs
    hooks.basicLog('Tiqets home page is working correctly')
}

export function searchOperation() {
    // To validate 'Search Operation' 
    cy.wait(3000)
    cy.get(search).type(placeName + '{enter}', { delay: 700 })
    // LOGs
    hooks.basicLog('Search procedure validated successfully')
}

export function australiaResult() {
    // To validate 'Australia Attractions'
    cy.contains(australiaInfo).should('be.visible')
    // LOGs
    hooks.basicLog('Australia Attractions validated successfully')
}