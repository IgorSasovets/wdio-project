'use strict';
const BasePage = require('../basePage.js');
const LoginPage = require('./LoginPage.js');

class RegistrationPage extends BasePage {

    constructor() {
        super();
    }

    get userEmailField() { return browser.$('#emailControl'); }
    get userPasswordField() { return browser.$('#passwordControl'); }
    get repeatPasswordField() { return browser.$('#repeatPasswordControl'); }
    get securityQuestionField() { return browser.$('.mat-form-field-infix .mat-select-empty'); }
    get securityOption() { return browser.$$('.mat-option .mat-option-text').then(el => el[0]); }
    get securityAnswerField() { return browser.$('#securityAnswerControl'); }
    get confirmRegisterButton() {return browser.$('#registerButton'); }
    get toastNotificationText() {return browser.$('simple-snack-bar span'); }

    async navigateToRegistrationPage() {
        await this.navigateTo('http://demo.owasp-juice.shop/#/register');
        return this.waitForElement(LoginPage.welcomeDialog);
    }

    async fillRegistrationForm(userEmail, userPass, securityAnswer) {
        await this.changeElementText(this.userEmailField, userEmail);
        await this.changeElementText(this.userPasswordField, userPass);
        await this.changeElementText(this.repeatPasswordField, userPass);
        await this.clickOnElement(this.securityQuestionField);
        await this.waitForElement(this.securityOption);
        await this.clickOnElement(this.securityOption);
        await this.changeElementText(this.securityAnswerField, securityAnswer);
        return this.clickOnElement(this.confirmRegisterButton);
    }

    async getElementText(selector) {
        await this.waitForElement(selector, {timeout: 10000});
        return selector.then(el => el.getText());
    }
}

module.exports = new RegistrationPage();
