'use strict';

class BasePage {

  navigateTo(url) {
    return browser.url(url);
  }

  async waitForElement(element, {timeout = 5000, retries = 10} = {}) {
    let iteration = 0;
    do {
        try {
            await browser.waitUntil(() => element.then(el => el.isDisplayed()), timeout);
            return;
        } catch (err) {
            iteration++;
            console.log(err);
        }
    } while (iteration < retries);
    return this;
  }

  async clickOnElement(element) {
    await this.waitForElement(element);
    return element.then(el => el.click());
  }

  async changeElementText(element, text) {
    await this.waitForElement(element);
    return element.then(el => el.setValue(text));
  }
}

module.exports = BasePage;
