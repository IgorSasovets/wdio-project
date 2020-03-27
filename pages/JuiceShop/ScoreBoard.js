/* eslint-disable no-useless-constructor */
'use strict';
const BasePage = require('../basePage.js');

class ScoreBoardPage extends BasePage {

    constructor() {
        super();
    }

    get scoreBoardTitle() { return browser.$('.mat-card-title.mat-card-title'); }
    get closeWelcomeBannerButton() { return browser.$('.mat-focus-indicator.close-dialog'); }
    get changeItemsVisibilityByLevelButton() { return browser.$('#btnToggleAllDifficulties'); }
    get challengesStatusList() { return browser.$$('mat-table mat-row'); }
    get difficultiesList() { return browser.$$('.star-container .mat-button-toggle-label-content'); }
    get changeItemsVisibilityBySelectedCategory() { return browser.$('.category-container .mat-button'); }

    async navigateToScoreBoardPage() {
        await this.navigateTo('http://demo.owasp-juice.shop/#/score-board');
        return this.waitForElement(this.scoreBoardTitle);
    }

    async closeWelcomeBanner() {
        await this.waitForElement(this.scoreBoardTitle);
        const isWelcomeBannerPresent = await this.isElementPresent(browser.$('.mat-focus-indicator.close-dialog'), 50);
        return isWelcomeBannerPresent ? this.clickOnElement(this.closeWelcomeBannerButton) : this;
    }

    async selectDifficultyCategory(categoryIndex) {
        await this.waitForElement(this.changeItemsVisibilityBySelectedCategory);
        return this.clickOnElement(this.difficultiesList.then(el => el[categoryIndex]));
    }

    async showItemsFromSelectedDifficultyCategory(expectedListCount = 10) {
        await this.clickOnElement(this.changeItemsVisibilityBySelectedCategory);
        return this.waitForListLengthChange(this.challengesStatusList, expectedListCount);
    }

    async hideItemsFromSelectedDifficultyCategory(expectedListCount = 0) {
        await this.clickOnElement(this.changeItemsVisibilityBySelectedCategory);
        return this.waitForListLengthChange(this.challengesStatusList, expectedListCount);
    }

    async getChallengesListlenght() {
        const list = await this.challengesStatusList;
        return list.length;
    }
}

module.exports = new ScoreBoardPage();
