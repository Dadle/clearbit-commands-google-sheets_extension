# Clearbit Commands Google Sheets Extension
This script sets up a button in your Google Sheets spreadsheet that will look up the website and logo of a company in a cell and write them in the two cells to the right of the selected cell. 
And yes, you can select a range and process them all in one go. 

[![Image from Gyazo](https://i.gyazo.com/83681a75176a89ba84e5acc9b81ffdbf.gif)](https://gyazo.com/83681a75176a89ba84e5acc9b81ffdbf)


## Steps for setting up Clearbits Commands button in google sheets
1. Create a free Clearbit account: [Clearbit website](https://dashboard.clearbit.com/)
2. Have your secret API key ready from the [Clearbit API page](https://dashboard.clearbit.com/api)  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/455c9ca0-9b71-4d50-8a10-0e69878a4d3c)
3. Open your Google Sheet.
4. Go to Extensions -> Apps Script.
5. Add new file and name it "Clearbit Commands.gs"  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/6fbd51a0-a396-438f-8164-0aa1bd5f1f84)
6. Copy the code from [Clearbit Commands.gs](https://github.com/Dadle/clearbit-commands-google-sheets_extension/blob/main/Clearbit%20Commands.gs) into the Google Apps Script editor  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/9db1c482-c510-4fa7-92c6-51c9c0091501)
7. Save the file in Google Apps Script editor  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/38b7a3f6-3abd-43f3-b9da-73d2d4c2baaf)
8. Add new file and name it "Set API Key.gs"  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/6fbd51a0-a396-438f-8164-0aa1bd5f1f84)
9. Copy the code from [Set API Keys.gs](https://github.com/Dadle/clearbit-commands-google-sheets_extension/blob/main/Set%20API%20Key.gs) into the Google Apps Script editor 
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/1c165c8d-4378-4ce4-95a0-41155c3a94c6)
10. Replace the value for the API_KEY property with your Clearbit API key from Step 2  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/f4d714e4-570a-4548-b70e-0382627a592e)
11. Save the script  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/84641682-cb76-4ada-9891-557c952c01ab)
12. With your key set, run the script  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/0f68a506-59aa-4198-bd5c-c8087adb55c0)
13. Remove your API key from the script so it is not written in plain code  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/c4729cc3-604d-474a-a82e-7fedba5d203f)
14. Save and close the script editor
15. In your google Sheet, select a cell with a company name in it and click the "Clearbits Commands" menu at the top of your browser window and click "Get Company Info"  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/86fa2181-a8e7-4651-af3f-a8a6ca74d368)
16. If everything went well, the two cells to the right of the company name should be filled with the company's comain name and the company's logo respectively  
![image](https://github.com/Dadle/clearbit-commands-google-sheets_extension/assets/16399255/3e9af6a7-e631-462b-95f6-0e76ca5691fe)

