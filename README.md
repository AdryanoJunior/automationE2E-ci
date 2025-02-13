# My Cypress Automation

This project uses Cypress to automate the testing of a resource for successful login to the application, in which the user must be redirected to the system's Dashboard page, and an invalid login, in which an error message is guaranteed to appear informing the customer of the reason for the failure. In addition to a complete E2E scenario, in which the user can fill in and change their personal information on the platform, information such as: driver's license number, marital status, address, email, telephone number, among various other information. 
Cypress is a JavaScript-based end-to-end testing framework that allows developers to write tests and run them in a real browser.

## Installation
```bash
npm install
```
> **NOTE:**
>
> it is necessary to have **node** installed

## Running
```bash
# You open the Cypress UI
npx cypress open

# Run the automation by command line
npx cypress run
```
