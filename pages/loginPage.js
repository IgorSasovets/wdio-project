'use strict';
const BasePage = require('./basePage.js');

class LoginPage extends BasePage {

  constructor() {
    super();
  }

  get loginPageLink() { return $('a[href=\'/login\']').then(el => el); }
  get emailField() { return $('input[name=\'login\']'); }
  get passwordField() { return $('input[name=\'password\']'); }
  get signInBtn() { return $('input[name=\'commit\']'); }
  get errorMessage() { return $('.flash>div'); }

  async navigateToLogin() {
    await this.navigateTo('https://github.com');
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
