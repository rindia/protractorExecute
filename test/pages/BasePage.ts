import { element, by } from 'protractor';


export  enum IdentificationType {

    Xpath,
    Css,
    Id,
    Name,
    PartialLinkText,
    ButtonText,
    Model,
    ClassName
}

export class BasePage {
   
  protected  ElementLocator(obj:any) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return element(by.Css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
                case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
                case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));
                case IdentificationType[IdentificationType.ButtonText]:
                return element(by.buttonText(obj.value));
                case IdentificationType[IdentificationType.Model]:
                return element(by.model(obj.value));
            default:
                break;
        }
    }
}