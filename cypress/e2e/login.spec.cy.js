import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import MyInfoPage from '../../pages/myInfoPage'

const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM - Tests', () => {



  const selectorsList = {
    
   
    genericField: ".oxd-input",
    comboBoxLicenseExpiryDate: "[placeholder='yyyy-dd-mm']",
    closeButton: '.--close',
    comboBoxNationality: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    selectNationality: ':nth-child(27)',
    comboBoxMaritalStatus: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    selectMaritalStatus: ':nth-child(3) > span',
    dateOfBirth: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    genderImput: ".oxd-radio-input",
    comboBoxBloodType: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    selectBloodType: ':nth-child(4) > span',
    testField: "[options='']",
    saveButton: "[type='submit']",
    contactDetailsButton: "[href='/web/index.php/pim/contactDetails/empNumber/7']",
    comboBoxCountry: '.oxd-select-text-input',
    selectCountry: ':nth-child(31)',
    wrongAlertError: '.oxd-alert'

  }

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginSuccessfully(userData.userSuccess.username, userData.userSuccess.password)

    cy.location('pathname').should('contains', '/dashboard')

    myInfoPage.fillPersonalDetails('Adryano', 'Vital', 'Junior')

    
    cy.get(selectorsList.genericField).eq(4).clear().type('Employe ID')
    cy.get(selectorsList.genericField).eq(5).clear().type('Other ID 2025')
    cy.get(selectorsList.genericField).eq(6).clear().type('Drivers License Number')
    cy.get(selectorsList.comboBoxLicenseExpiryDate).eq(0).clear().type('2032-03-01')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.genericField).eq(9).clear().type('Test Field 110279')
    cy.get(selectorsList.comboBoxNationality).click()
    cy.get(selectorsList.selectNationality).click()
    cy.get(selectorsList.comboBoxMaritalStatus).click()
    cy.get(selectorsList.selectMaritalStatus).click()
    cy.get(selectorsList.dateOfBirth).clear().type('2002-12-11')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.genderImput).eq(0).click()
    cy.get(selectorsList.comboBoxBloodType).click()
    cy.get(selectorsList.selectBloodType).click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2)').type('1999')
    //cy.get(selectorsList.genericField).eq(10).clear().type('0001')
    cy.get(selectorsList.saveButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get(selectorsList.contactDetailsButton).click()
    cy.get(selectorsList.genericField).eq(1).clear().type('Rua Sevilla 215')
    cy.get(selectorsList.genericField).eq(2).clear().type('Rua Berlim 434')
    cy.get(selectorsList.genericField).eq(3).clear().type('Campinas')
    cy.get(selectorsList.genericField).eq(4).clear().type('São Paulo')
    cy.get(selectorsList.genericField).eq(5).clear().type('01521-020')
    cy.get(selectorsList.comboBoxCountry).click()
    cy.get(selectorsList.selectCountry).click()
    cy.get(selectorsList.genericField).eq(6).clear().type('11993456569')
    cy.get(selectorsList.genericField).eq(9).clear().type('testqa123@example.com')
    cy.get(selectorsList.saveButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongAlertError)
    cy.get('body').should('contain', 'Invalid credentials')
  });
})