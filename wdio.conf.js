'use strict';
const path = require('path');
global.mocha = require('mocha');

exports.config = {
    runner: 'local',
    path: '/',
    maxInstances: 1,
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
    specs: process.env.SPECS || ['tests/*.spec.js'],
    suites: {
      imageComparison: ['tests/image-comparison.spec.js']
    },
    services: [
        'chromedriver',
        ['image-comparison',
            {
                baselineFolder: path.join(__dirname, './images/baseline'),
                screenshotPath: path.join(__dirname, './images/screenshots'),
                autoSaveBaseline: true
            }
        ]
    ],
    before: function(capabilities, specs) {
        browser.maximizeWindow();
    }
};
