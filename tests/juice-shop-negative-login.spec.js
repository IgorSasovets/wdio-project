'use strict';
const assert = require('assert');
const loginPage = require('../pages/JuiceShop/loginPage');

describe('Negative Juice shop login', () => {
    it('Should not login to Juice shop', async () => {
        await loginPage.navigateToLoginPage();
        await loginPage.closeWelcomeDialog();
        const userData = { emailField: 'ted@test.co', passwordField: '1234' };
        await loginPage.fillLoginForm(userData);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        assert.equal(errorMessage, 'Invalid email or password.');
    });
});
