import { browser, element, by } from 'protractor';
import { IdentificationType, BasePage } from './BasePage';
import * as json from 'load-json-file';
import {ExcelUtil} from '../Utilies/ExcelUtil';

const Locators = {

    username: {
        type: IdentificationType[IdentificationType.Id],
        value: "username"
    },
    password: {
        type: IdentificationType[IdentificationType.Model],
        value: "Auth.user.password"
    },
    anotherName: {
        type: IdentificationType[IdentificationType.Model],
        value: "model[options.key]"
    },
    loginBtn: {
        type: IdentificationType[IdentificationType.ButtonText],
        value: "Login"
    },
}

export class LoginPage extends BasePage {
    async openBrowser(url: string) {
        await browser.get(url);
    }
    async goLogin() {
        await this.ElementLocator(Locators.username).sendKeys("angular");
        await this.ElementLocator(Locators.password).sendKeys("password");
        await this.ElementLocator(Locators.anotherName).sendKeys("rohit saini");
        await this.ElementLocator(Locators.loginBtn).click();
    }

    async GetJsonData() {
        await json("../dataJson/data.json").then((x) => {
            console.log(x);
            //get value from json array
            console.log((<any>x).firstName);
        });
    }

    async GetDataFromExcel() {
       let sheet =   ExcelUtil.ReadExcelSheet("data.xlsx");

      // console.log(sheet);//get sheet data

       //get data from sheet

     let name =  sheet.FirstName;

     expect(name).toBe("sadas");
    }

}