import { getUniqueEmail, generateRandomPassword } from '../support/commands.js'
import  loginLocators  from '../locators/loginLocators.json'
import  loginData  from '../fixtures/loginData.json'

describe('Mashvisor test suit', ()=>{
    before(()=>{
        cy.clearAllLocalStorage()
        cy.visit("/")
    })
    it('Testcase for login page', ()=>{
        cy.get(loginLocators.emailField).click()
        cy.get(loginLocators.passwordField).type(' ')
        cy.get(loginLocators.emptyFieldErrorMessage).should("have.text", loginData.emptyFieldErrorMessage)
        cy.get(loginLocators.passwordField).clear()
        cy.get(loginLocators.emailField).type(' ')
        cy.get(loginLocators.emptyFieldErrorMessage).should("have.text", loginData.emptyFieldErrorMessage)
        cy.get(loginLocators.emailField).type(getUniqueEmail())
        cy.get(loginLocators.passwordField).type(generateRandomPassword())
        cy.get(loginLocators.checkBox).check()
        cy.get(loginLocators.loginButton).should("be.visible").click()
        cy.get(loginLocators.credentialsErrorMessage).should("have.text", loginData.credentialsErrorMessage)
    })
})