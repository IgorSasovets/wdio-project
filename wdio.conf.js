'use strict';
const path = require('path');
global.mocha = require('mocha');

exports.config = {
    runner: 'local',
    path: '/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999
    },
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
            prefs: {'profile.managed_default_content_settings.notifications': 1}
        }
      }
    ],
    baseUrl: 'https://github.com',
    logLevel:  'debug',
    specs: ['tests/*spec.js'],
    services: [
        'chromedriver'
    ],
    before: function(capabilities, specs) {
        browser.maximizeWindow();
    }
};
