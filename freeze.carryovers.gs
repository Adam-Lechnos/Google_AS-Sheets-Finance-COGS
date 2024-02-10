function FreezeValuesYearlyTrigger() {
  ScriptApp.newTrigger("freezeValues")
  .timeBased().onMonthDay(1).atHour(1).create();
}

function freezeValues() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('carryovers');  // or whatever name
  var range = sheet.getRange("AX3:BU3");    // assuming your data appears in A1-Z1 
  range.copyTo(range, {contentsOnly: true});
}