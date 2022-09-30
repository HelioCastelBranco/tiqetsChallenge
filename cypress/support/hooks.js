/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext')


export function toValidateSnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'regressive testing of image is working correctly')
}

export function basicLog(message) {

    cy.task('log', message)
}