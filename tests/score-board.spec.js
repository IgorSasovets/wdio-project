'use strict';
const assert = require('assert');
const ScoreBoardPage = require('../pages/JuiceShop/ScoreBoard');

describe('Hide and show all score board challenge items', () => {
    before(async() => {
        await ScoreBoardPage.navigateToScoreBoardPage();
        await ScoreBoardPage.closeWelcomeBanner();
    });
    it('Should change challenge items visibility to hide all', async() => {
        await ScoreBoardPage.hideItemsFromSelectedDifficultyCategory();
        assert.equal(await ScoreBoardPage.getChallengesListlenght(), 0);
    });
    it('Should change challenge items visibility to show all', async() => {
        await ScoreBoardPage.showItemsFromSelectedDifficultyCategory();
        assert.equal(await ScoreBoardPage.getChallengesListlenght(), 10);
    });
    it('Should change challenge items visibility for first and second category', async() => {
        const categoryIndex = 1;
        await ScoreBoardPage.selectDifficultyCategory(categoryIndex);
        assert.equal(await ScoreBoardPage.getChallengesListlenght(), 19);
    });
});
