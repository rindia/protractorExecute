import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { config } from '../config';
import { JsonFormatter } from '../reporting/CucumberReportExtension';


defineSupportCode(({ registerHandler, registerListener ,setDefaultTimeout }) => {
    setDefaultTimeout(30000);
    registerHandler("BeforeFeature", async () => {
        
    });

    registerHandler("BeforeScenario", async () => {

        await browser.get(config.baseUrl);

    });

    registerHandler("AfterScenerio", async () => {

    });

    registerHandler("AfterStep", async () => {

       
    });
    registerHandler("AfterFeature", async () => {

    });

    registerHandler("StepResult", async (StepResult) => {
           if (StepResult.isFailed()) {
                return browser.takeScreenshot().then(function (screenShot) {
                var  decodeImage = new Buffer(screenShot, 'base64');
                StepResult.attachments.push({
                    data: decodeImage.toString('base64'),
                    mimeType: 'image/png'
                });

            });
        }
    });

    registerListener(JsonFormatter);



});