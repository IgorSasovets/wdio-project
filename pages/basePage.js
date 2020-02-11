'use strict';

class BasePage {

  navigateTo(url) {
    return browser.url(url);
  }

  async waitForElement(element, {timeout = 5000, retries = 10} = {}) {
    const processedElement = typeof element === 'object' ? await element : element;
    let iteration = 0;
    do {
        try {
            await browser.waitUntil(() => processedElement.isDisplayed(), timeout);
            return;
        } catch (err) {
            iteration++;
            console.log(err);
        }
    } while (iteration < retries);
    return this;
  }

  async clickOnElement(element) {
    const processedElement = typeof element === 'object' ? await element : element;
    await this.waitForElement(processedElement);
    return processedElement.click();
  }

  async changeElementText(element, text) {
    const processedElement = typeof element === 'object' ? await element : element;
    await this.waitForElement(processedElement);
    return processedElement.setValue(text);
  }
}

module.exports = BasePage;
