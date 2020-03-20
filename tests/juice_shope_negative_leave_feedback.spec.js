'use strict';
const assert = require('assert');
const FeedbackPage = require('../pages/JuiceShop/feedbackPage');
const captcha = '121123asdasd';
const comment = 'leaved comment'

describe('Negative check captcha', () => {
    before(async () => {
        await FeedbackPage.navigateToFeedbackPage();
        await FeedbackPage.dissmissWelcomeModal();
    });

    it('Should type wrong captcha', async () => {
        const errorMessage = FeedbackPage.errorCaptchaMessage;
        await FeedbackPage.typeCaptchaResultfield(captcha);
        await FeedbackPage.clickOnCommentfield(comment);
        assert.equal(await FeedbackPage.getErrorMessage(errorMessage), 'Invalid CAPTCHA code');
    });
});
