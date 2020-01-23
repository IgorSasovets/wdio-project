'use strict';
const assert = require('assert');
const loginPage = require('../pages/loginPage');
const treshold = 1.0;

describe('Angular material suite', () => {
    it('Positive scenario', async() => {
      await loginPage.navigateTo('https://angular-cbpbdt.stackblitz.io/');
      const openModalButton = $('ol .mat-raised-button');
      await loginPage.clickOnElement(openModalButton);
      const modalWindow = $('.mat-dialog-container');
      // Just to visualize
      await browser.pause(3000);
      await browser.saveElement(modalWindow, 'pickAnimalModal')
      const percentage = await browser.checkElement(modalWindow, 'pickAnimalModal',
        {saveAboveTolerance: treshold, ignoreColors: true});
      assert.equal(percentage < treshold, true);
    });
});
