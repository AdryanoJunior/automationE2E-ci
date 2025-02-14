class ContactDetailsPage {
    selectorsList() {
        const selectors = {
            contactDetailsButton: "[href='/web/index.php/pim/contactDetails/empNumber/7']",
            genericField: ".oxd-input",
            zipCodeField: ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input',
            comboBoxCountry: '.oxd-select-text-input',
            selectCountry: ':nth-child(31)',
            emailField: ':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            saveButton: "[type='submit']",
        }
        return selectors
    }
    fillContactDetails(Street, Street2, City, State, ZipCode, Phone, Email ) {
        cy.get(this.selectorsList().contactDetailsButton).click()
        cy.get(this.selectorsList().genericField).eq(1).clear().type(Street)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(Street2)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(City)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(State)
        cy.get(this.selectorsList().zipCodeField).clear().type(ZipCode)
        cy.get(this.selectorsList().comboBoxCountry).click()
        cy.get(this.selectorsList().selectCountry).click()
        cy.get(this.selectorsList().genericField).eq(6).clear().type(Phone)
        cy.get(this.selectorsList().emailField).clear().type(Email)
        cy.get(this.selectorsList().saveButton).click()
    }
}

export default ContactDetailsPage