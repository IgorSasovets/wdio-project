'use strict';
const BasePage = require('./basePage.js');

class LoginPage extends BasePage {

  constructor() {
    super();
  }

  get loginPageLink() { return browser.$('a[href=\'/login\']').then(el => el) }
  get emailField() { return browser.$('input[name=\'login\']') }
  get passwordField() { return browser.$('input[name=\'password\']') }
  get signInBtn() { return browser.$('input[name=\'commit\']') }
  get errorMessage() { return browser.$('.flash>.container') }

  async navigateToLogin() {
    await browser.url('https://github.com');
    await this.waitForElement(this.loginPageLink);
    return this.clickOnElement(this.loginPageLink);
  }

  async fillLoginForm(email, password) {
    await this.waitForElement(this.emailField);
    await this.changeElementText(this.emailField, email);
    return this.changeElementText(this.passwordField, password);
  }

  async clickOnSignInButton() {
    return this.clickOnElement(this.signInBtn);
  }

  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return this.errorMessage.then(el => el.getText());
  }
}

module.exports = new LoginPage();
