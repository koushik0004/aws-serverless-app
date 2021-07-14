# aws-serverless-app
Basic serverless application in nodejs and DynamoDB

### App update info
1. Updated serverless config file with DynamoDb resources table and POST request
2. Added custom property into the yml file
3. added data insert functionality into src/handler/createEcomItem.js

## Severless app deployment command
```
$ sls deploy -v
```
This command will deploy the entire stack, sice serveless.yml file has been updated thus we need to deploy the entire app.
1. -v option is for verbose console output.

for singe file deployment
```
$ sls deploy -f <filename>
```