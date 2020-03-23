'use strict';
const assert = require('assert');
const faker = require('faker');
const LoginPage = require('../pages/JuiceShop/LoginPage');
const RegistrationPage = require('../pages/JuiceShop/RegistrationPage');
const ProductsPage = require('../pages/JuiceShop/ProductsPage');
const noResultTitleText = 'No results found';
const noResultMessageText = `Try adjusting your search to find what you're looking for.`;
let testItemName;

describe('Search OWASP juice shop test suite', () => {
    before(async() => {
        await ProductsPage.navigateToProductsPage();
        await LoginPage.closeWelcomeDialog();
    });
    
    it('Should search for an apple juice', async () => {
        testItemName = 'Apple juice';
        await ProductsPage.searchForProduct(testItemName);
        assert.equal(await RegistrationPage.getElementText(ProductsPage.searchedItem), 'Apple Juice (1000ml)\n1.99¤');
    });

    it('Should search for a non-existing item', async() => {
        testItemName = faker.internet.password(15);
        await ProductsPage.clearSearchInput();
        await ProductsPage.searchForProduct(testItemName);
        assert.equal(await RegistrationPage.getElementText(ProductsPage.noResultTitle), noResultTitleText);
        assert.equal(await RegistrationPage.getElementText(ProductsPage.noResultMessage), noResultMessageText);
    });

});
