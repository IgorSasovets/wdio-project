'use strict';
const BasePage = require('../basePage.js');
const LoginPage = require('./LoginPage.js');

class ProductsPage extends BasePage {

    constructor() {
        super();
    }

    get searchIcon() { return browser.$('.mat-search_icon-search'); }
    get searchInput() { return browser.$('#mat-input-0'); }
    get searchedItem() { return browser.$$('.product').then(el => el[0]); }
    get noResultTitle() { return browser.$$('.noResultText').then(el => el[0]); }
    get noResultMessage() { return browser.$$('.noResultText').then(el => el[1]); }
    get clearSearchIcon() { return browser.$('.mat-search_icon-close'); }

    async navigateToProductsPage() {
        await this.navigateTo('https://juice-shop.herokuapp.com/#/');
        return this.waitForElement(LoginPage.welcomeDialog);
    }

    async searchForProduct(itemName) {
        await this.clickOnElement(this.searchIcon);
        await this.changeElementText(this.searchInput, itemName);
        await browser.keys("\uE007");
        return this.waitForElement(this.searchedItem); 
    }

    async clearSearchInput() {
        await this.clickOnElement(this.clearSearchIcon);
        return this.waitForElement(this.searchIcon);
    }

}

module.exports = new ProductsPage();
