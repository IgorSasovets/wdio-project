/* eslint-disable class-methods-use-this */
'use strict';
class BasePage {
    navigateTo(url) {
        return browser.url(url);
    }

    async waitForElement(element, { timeout = 5000, retries = 10 } = {}) {
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

    async waitForElementInvisible(element, {timeout = 5000, retries = 10} = {}) {
        const processedElement = typeof element === 'object' ? await element : element;
        let iteration = 0;
        do {
            try {
                await browser.waitUntil(() => !processedElement.isDisplayed(), timeout);
                return;
            } catch (err) {
                iteration++;
                console.log(err);
            }
        } while (iteration < retries);
        return this;
    }

    async isElementPresent(wdioElement, maxRetries = 10) {
        let res;
        for (let i = 0; i < maxRetries; i++) {
            try {
                const element = typeof wdioElement === 'object' ? await wdioElement : wdioElement;
                res = await element.isExisting();
                if (res === true)
                    return res;
            } catch (err) { console.log(err); }
            await browser.pause(200);
        }
        return false;
    }

    async waitForListLengthChange(list, tgtLength, maxRetries = 10) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const wdioList = await list;
                if (wdioList.length === tgtLength)
                    break;
            } catch(err) { console.log(err); }
            await browser.pause(1000);
        }
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
