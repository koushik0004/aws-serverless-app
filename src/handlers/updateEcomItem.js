import AWS from 'aws-sdk';
import createErrors from 'http-errors';
import {middyMiddlewares} from '../utils';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function updateEcomItem(event, context) {
  const {id} = event.pathParameters;
  const {amount} = event.body;

  const params = {
    TableName: process.env.ECOM_TABLE_NAME,
    Key: {id},
    UpdateExpression: 'set price.amount = :amount',
    ExpressionAttributeValues: {
      ':amount': amount
    },
    ReturnValues: 'ALL_NEW'
  }

  let updatedEcomItem;
  try { 
    const result = await dynamoDB.update(params).promise();
    updatedEcomItem = result.Attributes;
  } catch(error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedEcomItem }),
  };
}

export const handler = middyMiddlewares(updateEcomItem);


