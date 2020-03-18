'use strict';
const assert = require('assert');
const faker = require('faker');
const LoginPage = require('../pages/JuiceShop/LoginPage');
const RegistrationPage = require('../pages/JuiceShop/RegistrationPage');
const userEmail = faker.internet.email();
const userPassword = faker.internet.password(10);
const securityAnswer = 'test';
const textMessage = 'Registration completed successfully. You can now log in.';

describe('Registration on Juice shop', () => {
    before(async() => {
        await RegistrationPage.navigateToRegistrationPage();
        await LoginPage.closeWelcomeDialog();
    });
    it('Should register new user on Juice shop', async () => {
        await RegistrationPage.fillRegistrationForm(userEmail, userPassword, securityAnswer);
        assert.equal(await RegistrationPage.getElementText(RegistrationPage.toastNotificationText), textMessage);
    });
});
