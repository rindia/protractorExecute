import { BasePage, IdentificationType } from "./BasePage";
import { browser } from "protractor";


const Locators = {

    BtnBankMangerLogin: {

        type: IdentificationType[IdentificationType.ButtonText],
        value: "Bank Manager Login"
    },
    TxtFirstname: {
        type: IdentificationType[IdentificationType.Model],
        value: "fName"
    },
    TxtLastName: {
        type: IdentificationType[IdentificationType.Model],
        value: "lName"
    },
    TxtPostalCode: {
        type: IdentificationType[IdentificationType.Model],
        value: "postCd"
    },
    BtnAddCustomer: {

        type: IdentificationType[IdentificationType.ButtonText],
        value: "Add Customer"
    },
    BtnSaveCustomer: {

        type: IdentificationType[IdentificationType.Xpath],
        value: '//form/button'
    }
};


export class BankPage extends BasePage {


    async clickBankManagerBtn() {
        await this.ElementLocator(Locators.BtnBankMangerLogin).click();

    }
    async clickAddcustomerBtn() {
        await this.ElementLocator(Locators.BtnAddCustomer).click();
    }
    async enterFirstName(firstname: string) {
        await this.ElementLocator(Locators.TxtFirstname).sendKeys(firstname);
    }

    async enterLastName(lastName: string) {
        await this.ElementLocator(Locators.TxtLastName).sendKeys(lastName);
    }

    async enterPostalCode(post: string) {
        await this.ElementLocator(Locators.TxtPostalCode).sendKeys(post);
    }

    async clickSaveCustomer() {

        await this.ElementLocator(Locators.BtnSaveCustomer).click();
        
    }
}