import  signUpLocators  from '../locators/signUp.json'
import  signUpData  from '../fixtures/signUp.json'
import { getUniqueEmail } from '../support/commands.js'

describe('Luma testsuit', ()=>{
    before(()=>{
        cy.clearAllLocalStorage()
        
    })
    it('Testcase for invalid email', ()=>{
        cy.visit("/")
        cy.get(signUpLocators.firstName).type(signUpData.firstName)
        cy.get(signUpLocators.lastName).type(signUpData.lastName)
        cy.get(signUpLocators.email).type(signUpData.invalidEmail)
        cy.get(signUpLocators.password).type(signUpData.password)
        cy.get(signUpLocators.passwordConfirmation).type(signUpData.confirmPassword)
        cy.get(signUpLocators.submitBtn).click()
        cy.get(signUpLocators.emailAddressError).should("have.text", signUpData.errorMessage)

    })
    it('Testcase for signup with valid details',()=>{
        cy.visit("/")
        cy.get(signUpLocators.firstName).type(signUpData.firstName)
        cy.get(signUpLocators.lastName).type(signUpData.lastName)
        cy.get(signUpLocators.email).type(getUniqueEmail())
        cy.get(signUpLocators.password).type(signUpData.password)
        cy.get(signUpLocators.passwordConfirmation).type(signUpData.confirmPassword)
        cy.get(signUpLocators.submitBtn).click()
        cy.get(signUpLocators.messageSuccess).should("have.text", signUpData.successMessage)
        cy.get(signUpLocators.actionSwitch).first().click()
        cy.get(signUpLocators.signOutBtn).first().click()
    })
})