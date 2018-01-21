import { IWorkSheet } from "xlsx";
import * as excel from 'ts-xlsx';




export class ExcelUtil{

static ReadExcelSheet(filePath:string):IWorkSheet {

 let file =  excel.readFile(filePath);
  let sheet = file.Sheets["Sheet1"];
  return excel.utils.sheet_to_json(sheet)[0];
}
}