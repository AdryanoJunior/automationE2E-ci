class MyInfoPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
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
            testField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2)',
            saveButton: "[type='submit']",
            
            
        }
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(4).clear().type('Employe ID')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('Other ID 2025')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('Drivers License Number')
        cy.get(this.selectorsList().comboBoxLicenseExpiryDate).eq(0).clear().type('2032-03-01')
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type('Test Field 110279')
        cy.get(this.selectorsList().comboBoxNationality).click()
        cy.get(this.selectorsList().selectNationality).click()
        cy.get(this.selectorsList().comboBoxMaritalStatus).click()
        cy.get(this.selectorsList().selectMaritalStatus).click()
        cy.get(this.selectorsList().dateOfBirth).clear().type('2002-12-11')
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genderImput).eq(0).click()
        cy.get(this.selectorsList().comboBoxBloodType).click({ multiple: true })
        cy.get(this.selectorsList().selectBloodType).click()
        cy.get(this.selectorsList().testField).type('1999')
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }
    
}

export default MyInfoPage