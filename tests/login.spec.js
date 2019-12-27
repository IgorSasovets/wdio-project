'use strict';
const assert = require('assert');
const loginPage = require('../pages/loginPage');

describe('Negative GitHub login', () => {
    it('Should not login to GitHub', async() => {
      await loginPage.navigateToLogin();
      await loginPage.fillLoginForm('test@gmail.com', '12445456');
      await loginPage.clickOnSignInButton();
      await loginPage.waitForElement(loginPage.errorMessage);
      const errorMessage = await loginPage.errorMessage.getText();
      assert(errorMessage).to.equal('Invalid login or password');
    });
});
