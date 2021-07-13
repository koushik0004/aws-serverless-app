# aws-serverless-app
Basic serverless application in nodejs and DynamoDB

### App update info
1. Added serverless.yml file for the deployment setup
2. created a single file under src/handler/createEcomItem.js

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