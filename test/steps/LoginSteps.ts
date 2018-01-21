import {defineSupportCode} from 'cucumber';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../config';
import { element, by } from 'protractor';


defineSupportCode(({Given,When,Then})=>{

    var loginPage = new LoginPage()
    Given(/^I Open Url$/,async()=>{
      await loginPage.goLogin();
    });

});