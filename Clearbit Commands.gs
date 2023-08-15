// Adds the menu option to the sheet being opened
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Create menu
  ui.createMenu('Clearbit Commands')
      .addItem('Get Company Info', 'getCompanyInfo')  // The name of the menu item and the name of the function to run
      .addToUi();
}

// This is doing all the work
function getCompanyInfo() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getActiveRange();
  var rows = range.getNumRows();
  var col = range.getColumn();
  
  var scriptProperties = PropertiesService.getScriptProperties();
  var apiKey = scriptProperties.getProperty('API_KEY');
  var headers = {
    "Authorization": "Basic " + Utilities.base64Encode(apiKey + ":")
  };
  var options = {
    method: 'get',
    headers: headers
  };

  for (var i = 0; i < rows; i++) {
    var row = range.getRow() + i;
    var companyName = sheet.getRange(row, col).getValue();
    if (companyName == '') {
      continue;
    }

    // If the next cell does not start with "Error" and is not empty, skip to the next row
    var nextCellValue = sheet.getRange(row, col + 1).getValue();
    if (!nextCellValue.startsWith("Error") && nextCellValue !== '') {
      continue;
    }


    var apiUrl = 'https://company.clearbit.com/v1/domains/find?name=' + encodeURIComponent(companyName);
    
    try {
      var response = UrlFetchApp.fetch(apiUrl, options);
      var content = response.getContentText();
      var json = JSON.parse(content);

      if (json.domain && json.logo) {
        sheet.getRange(row, col + 1).setValue(json.domain);
        sheet.getRange(row, col + 2).setValue('=IMAGE("' + json.logo + '")');
        Logger.log('Company domain API found company domain and logo for: ' + companyName);
      } else {
        // If not found, use the Autocomplete API
        var autoCompleteApiUrl = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=' + encodeURIComponent(companyName);
        var autoCompleteResponse = UrlFetchApp.fetch(autoCompleteApiUrl);
        var autoCompleteData = JSON.parse(autoCompleteResponse.getContentText());

        if (autoCompleteData.length > 0) {
          sheet.getRange(row, col + 1).setValue(autoCompleteData[0].domain);
          sheet.getRange(row, col + 2).setValue('=IMAGE("' + autoCompleteData[0].logo + '")');
          Logger.log('Autocomplete API found company domain and logo for: ' + companyName);
        } else {
          sheet.getRange(row, col + 1).setValue("Error: Data not found for company: " + companyName);
          Logger.log('Using Autocomplete API - Error fetching data for company: ' + companyName + ', Error: ' + e.toString());
        }
      }
    } catch(e) {
      Logger.log('Using Company domains API - Error fetching data for company: ' + companyName + ', Error: ' + e.toString());
      sheet.getRange(row, col + 1).setValue("Error: Data not found for company: " + companyName);
    }
  }
}
