# aws-serverless-app
Basic serverless application in nodejs and DynamoDB

### App update info
1. Updated serverless file with DynamoDB roles and permission.
2. Updated new action handlers for lambda function
3. Created other service function file for CRUD operation.
4. User middy middlewares for code simplification in AWS Lambda. Middy is a very simple middleware engine that allows you to simplify your AWS Lambda code when using Node.js. [More details](https://github.com/middyjs/middy)
5. user serverless plugin called serverless-pseudo-parameters, which offers yaml code simplification with serverless variables. 


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