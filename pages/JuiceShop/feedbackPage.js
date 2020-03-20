'use strict';
const BasePage = require('../basePage.js');

class FeedbackPage extends BasePage {

    constructor() {
        super();
    }

    get commentField() {return browser.$('#comment');}
    get resultField() {return browser.$('#captchaControl');}
    get errorCaptchaMessage() {return browser.$('.ng-tns-c123-9>.mat-error');}
    get customerFeedbackModal() {return browser.$('.mat-card.mat-focus-indicator.mat-elevation-z6');}
    get dismissButton() {return browser.$('.mat-focus-indicator.close-dialog');}

    async navigateToFeedbackPage() {
        await this.navigateTo('http://demo.owasp-juice.shop/#/contact');
        return this.waitForElement(this.customerFeedbackModal);
    }

    async dissmissWelcomeModal() {
        return this.clickOnElement(this.dismissButton);
    }

    async clickOnCommentfield() {
        await this.clickOnElement(this.commentField);
        return this.waitForElement(this.commentField);
    }

    async typeCaptchaResultfield(captcha) {
        await this.clickOnElement(this.resultField);
        await this.changeElementText(this.resultField, captcha);
        return this.waitForElement(this.commentField);
    }

    async getErrorMessage(errorMessage) {
        await this.waitForElement(errorMessage);
        return errorMessage.then(el => el.getText());
    }
}
    module.exports = new FeedbackPage();
