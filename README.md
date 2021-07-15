# aws-serverless-app
Basic serverless application in nodejs and DynamoDB

### App update info
1. created one processOrder.js [cron job type] file
2. updated serverless.yml file with new even

```
$ sls logs -f <fileName> -t [will shown as tailing logs, provided function already invoked]
$ sls logs -f <fileName> [will shown as all logs, provided function already invoked]
$ sls invoke -f <fileName> -l [to invoke manually lambda function and see the logs]
```


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