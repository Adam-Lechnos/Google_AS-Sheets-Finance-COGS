# Google_AS-Sheets-Finance-COGS
Google Sheets automation for calculating cost of goods sold (COGS) for online reselling

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| freezeValues | Time-driven | Month - 1st | 1am - 2am | Daily |
| freezeValues | Time-driven | Month - 1st | Midnight to 1am | Immediately |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected*

<sup><sub>Spreadsheet Name: `Cost of Goods Sold & Sales Tracking`</sup></sub>
