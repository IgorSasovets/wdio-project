'use strict';
const assert = require('assert');
const loginPage = require('../pages/loginPage');

describe.skip('Angular material suite', () => {
    it('Positive scenario', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const nameField = $('.mat-dialog-content input');
      // Just to visualize
      await browser.pause(3000);
      await loginPage.changeElementText(nameField, 'Dealete');
      // Just to visualize
      await browser.pause(3000);
      const modalConfirmButton = $$('.mat-dialog-actions button').then(el => el[1]);
      await loginPage.clickOnElement(modalConfirmButton);
      const textField = $('li i');
      await loginPage.waitForElement(textField, {maxRetries: 3});
      const elementText = await textField.then(el => el.getText());
      assert.equal(elementText, 'Dealete');
    });
    it('Positive scenario #2', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const nameField = $('.mat-dialog-content input');
      // Just to visualize
      await browser.pause(3000);
      await loginPage.changeElementText(nameField, 'Accent');
      // Just to visualize
      await browser.pause(3000);
      const modalConfirmButton = $$('.mat-dialog-actions button').then(el => el[1]);
      await loginPage.clickOnElement(modalConfirmButton);
      const textField = $('li i');
      await loginPage.waitForElement(textField, {maxRetries: 3});
      const elementText = await textField.then(el => el.getText());
      assert.equal(elementText, 'Accent');
    });
    it('Should confirm the bug', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const nameField = $('.mat-dialog-content input');
      await loginPage.changeElementText(nameField, 'Delete');
      // Just to visualize
      await browser.pause(3000);
      const modalConfirmButton = $$('.mat-dialog-actions button').then(el => el[1]);
      await loginPage.clickOnElement(modalConfirmButton);
      const textField = $('li i');
      await loginPage.waitForElement(textField, {maxRetries: 3});
      const elementText = await textField.then(el => el.getText());
      assert.equal(elementText, 'Delete');
    });
});
