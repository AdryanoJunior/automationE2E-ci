import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import MyInfoPage from '../../pages/myInfoPage'
import ContactDetailsPage from '../../pages/contactDetailsPage'

const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()
const contactDetailsPage = new ContactDetailsPage()

describe('Orange HRM - Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginSuccessfully(userData.userSuccess.username, userData.userSuccess.password)

    cy.location('pathname').should('contains', '/dashboard')

    myInfoPage.fillPersonalDetails('Adryano', 'Vital', 'Junior')
    cy.get('body').should('contain', 'Successfully Saved')

    contactDetailsPage.fillContactDetails()
    cy.get('body').should('contain', 'Successfully Updated')
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    
    loginPage.invalidLogin(userData.userFail.username, userData.userFail.password)
    cy.get('body').should('contain', 'Invalid credentials')
  });
})