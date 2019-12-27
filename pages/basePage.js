'use strict';

class BasePage {

  waitForElement(element, timeout) {
    return browser.waitUntil(() => element.isDisplayed(), timeout);
  }

  clickOnElement(element) {
    return element.click();
  }

}

module.exports = BasePage;
