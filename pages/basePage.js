'use strict';

class BasePage {

  waitForElement(element, timeout = 5000) {
    return browser.waitUntil(() => element.then(el => el.isDisplayed()), timeout);
  }

  clickOnElement(element) {
    return element.then(el => el.click());
  }

  async changeElementText(element, text) {
    await this.waitForElement(element);
    return element.then(el => el.setValue(text));
  }
}

module.exports = BasePage;
