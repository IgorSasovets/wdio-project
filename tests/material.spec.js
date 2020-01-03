'use strict';
const assert = require('assert');
const loginPage = require('../pages/loginPage');

describe('Angular material suite', () => {
    it('Positive scenario', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const nameField = $('.mat-dialog-content input');
      await loginPage.changeElementText(nameField, 'Dealete');
      const modalConfirmButton = $$('.mat-dialog-actions button').then(el => el[1]);
      await loginPage.clickOnElement(modalConfirmButton);
      const textField = $('li i');
      await loginPage.waitForElement(textField, {maxRetries: 3});
      const elementText = await textField.then(el => el.getText());
      assert.equal(elementText, 'Dealete');
    });
    it('Should confirm the bug', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const nameField = $('.mat-dialog-content input');
      await browser.pause(4000);
      await loginPage.changeElementText(nameField, 'Delete');
      const modalConfirmButton = $$('.mat-dialog-actions button').then(el => el[1]);
      await loginPage.clickOnElement(modalConfirmButton);
      const textField = $('li i');
      await loginPage.waitForElement(textField, {maxRetries: 3});
      const elementText = await textField.then(el => el.getText());
      assert.equal(elementText, 'Delete');
    });
});
