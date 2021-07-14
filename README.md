# aws-serverless-app
Basic serverless application in nodejs and DynamoDB

### App update info
1. Splitting serverless.yml file into readable multiple files
2. Using intrinsic function getting resource table name and arn(Amazon resource name)[e.g. Ref, GetAtt]
3. How to referring self yml file and use the properties.
4. Creating ENVIRONMENT variable and using it in function.

## Resources
[AWS CloudFormation DynamoDB](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)
[CloudFormation Intrinsic function](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)

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