const path = require('path');
global.mocha = require('mocha');

exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        process.env.SPEC_NAME || './tests/*.spec.js'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://github.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['chromedriver',
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
