// Script to set the API key in Script Properties
// Safer than storing the key in the code directly
// but key can be retrieved by anyone with access to this Apps Script project

function setAPIKey() {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('API_KEY', 'API_KEY_GOES_HERE');
}
