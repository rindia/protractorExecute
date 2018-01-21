"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('To Test Gmail Login window', function () {
    it('should be able to login', function () {
        protractor_1.browser.driver;
        protractor_1.browser.driver.get('http://gmail.com/');
        protractor_1.browser.driver.findElement(protractor_1.by.className('whsOnd')).sendKeys("trainer@way2automation.com");
        var nxt = protractor_1.browser.driver.findElement(protractor_1.by.css("#next"));
        nxt.click();
        protractor_1.browser.driver.findElement(protractor_1.by.css('#Passwd')).sendKeys("lskdhgfsdf");
        protractor_1.browser.driver.findElement(protractor_1.by.css('#signIn')).click();
        //Printing Text
        var txt = protractor_1.browser.driver.findElement(protractor_1.by.css('#errormsg_0_Passwd')).getText();
        txt.then(function (text) {
            console.log(text);
        });
    });
});
//# sourceMappingURL=FirstTestSpec.js.map