'use strict';
const assert = require('assert');
const loginPage = require('../pages/loginPage');

class TestCase {

  constructor() {
  }

  get buttonsArray() { return $$('.text-center a'); }
  get firstButton() { return $$('.text-center a').then(el => el[0]); }
}

describe('Multiple selectors', () => {
    it('Should test multiple selectors', async() => {
      await browser.url('https://angularjs.org/');
      const testCaseObj = new TestCase();
      await loginPage.waitForElement(testCaseObj.buttonsArray.then(el => el[1]));
      const test = await testCaseObj.buttonsArray;
      console.log(test.length);
      const logs = await browser.getLogs('browser');
      console.log('======================LOGS==========================\n', logs);
      const text = await testCaseObj.buttonsArray.then(el => el[1].getAttribute('innerText'));
      assert.equal(text, 'DOWNLOAD ANGULARJS');
      const firstElementText = await testCaseObj.firstButton.then(el => el.getAttribute('innerText'));
      assert.equal(firstElementText, 'TRY THE NEW ANGULAR\nNEW');
    });
});
