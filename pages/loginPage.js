'use strict';
const BasePage = require('./basePage.js');

class LoginPage extends BasePage {

  constructor() {
    super();
  }

  get loginPageLink() { return browser.$('a[href=\'/login\']') }
  get emailField() { return browser.$('input[name=\'login\']') }
  get passwordField() { return browser.$('input[name=\'password\']') }
  get signInBtn() { return browser.$('input[name=\'commit\']') }
  get errorMessage() { return browser.$$('.flash.flash-error')[0] }

  async navigateToLogin() {
    await browser.url('https://github.com');
    await this.waitForElement(this.loginPageLink, 5000);
    return this.clickOnElement(this.loginPageLink);
  }

  async fillLoginForm(email, password) {
    await this.waitForElement(this.emailField, 5000);
    await this.emailField.addValue(email);
    return this.passwordField.addValue(password);
  }

  clickOnSignInButton() {
    return this.signInBtn.click();
  }
}

module.exports = new LoginPage();
