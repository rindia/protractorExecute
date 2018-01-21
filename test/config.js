"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['./steps/*.js', './hooks/*.js']
    },
    jasmineNodeOpts: { defaultTimeoutInterval: 15000 },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=config.js.map