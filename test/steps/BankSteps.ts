import { defineSupportCode, TableDefinition } from "cucumber";
import { BankPage } from "../pages/BankPage";
import { browser } from "protractor";



var bankPage = new BankPage();

defineSupportCode(({Given,When,Then})=>{



When(/^I click On Bank Manager Login Button$/,async()=>{
    await bankPage.clickBankManagerBtn();
    
  });
  Then(/^I Click On Add customer Button$/,async()=>{
  
    await  bankPage.clickAddcustomerBtn();
  });
  Then(/^I Enter First Name$/,async(table:TableDefinition)=>{
  
   await  table.rows().forEach(ele=>{
           if(ele.length>0)
           {
            bankPage.enterFirstName(ele[0]);
           }
       
    });
   
  //await bankPage.enterFirstName(table.hashes('firstname'))
  });
  Then(/^I Enter Last Name$/,async()=>{
    
    await bankPage.enterLastName('saini');
  });
  Then(/^I Enter Postal code$/,async()=>{
    await bankPage.enterPostalCode('120123');
  });

  Then(/^I Click On Add Customer Button$/,async()=>{
    await bankPage.clickSaveCustomer();
  });
});