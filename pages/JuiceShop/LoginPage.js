const BasePage = require('../basePage.js');

class LoginPage extends BasePage {

    get emailField() {return browser.$$('#login-form input').then(el => el[0]);}

    get passwordField() {return browser.$$('#login-form input').then(el => el[1]);}

    get loginButton() {return browser.$('#login-form #loginButton');}

    get welcomeDialog() {return browser.$('.cdk-overlay-pane');}

    get dismissButton() {return browser.$('.close-dialog');}

    get errorMessage(){return browser.$('.error')};

    async navigateToLoginPage() {
        await this.navigateTo('http://demo.owasp-juice.shop/#/login');
        return this.waitForElement(this.welcomeDialog);
    }

    clickLoginButton() {
        return this.clickOnElement(this.loginButton);
    }

    closeWelcomeDialog() {
        return this.clickOnElement(this.dismissButton);
    }

    async fillLoginForm(data = {}) {
        for (const key of Object.keys(data)) {
            await this.changeElementText(this[key], data[key]);
        }
        return this;
    }

    async getErrorMessage() {
        await this.waitForElement(this.errorMessage);
        return this.errorMessage.then(el => el.getText());
    }
}

module.exports = new LoginPage();
