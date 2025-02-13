class ContactDetailsPage {
    selectorsList() {
        const selectors = {
            contactDetailsButton: "[href='/web/index.php/pim/contactDetails/empNumber/7']",
            genericField: ".oxd-input",
            comboBoxCountry: '.oxd-select-text-input',
            selectCountry: ':nth-child(31)',
            saveButton: "[type='submit']",
        }
        return selectors
    }
    fillContactDetails() {
        cy.get(this.selectorsList().contactDetailsButton).click()
        cy.get(this.selectorsList().genericField).eq(1).clear().type('Rua Sevilla 215')
        cy.get(this.selectorsList().genericField).eq(2).clear().type('Rua Berlim 434')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Campinas')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('São Paulo')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('01521-020')
        cy.get(this.selectorsList().comboBoxCountry).click()
        cy.get(this.selectorsList().selectCountry).click()
        cy.get(this.selectorsList().genericField).eq(6).clear().type('11993456569')
        cy.get(this.selectorsList().genericField).eq(9).clear().type('testqa123@example.com')
        cy.get(this.selectorsList().saveButton).click()
    }
}

export default ContactDetailsPage