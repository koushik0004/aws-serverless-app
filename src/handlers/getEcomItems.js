import AWS from 'aws-sdk';
import createErrors from 'http-errors';
import {middyMiddlewares} from '../utils';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function getEcomItems(event, context) {
  let ecomItems;
  try { 
    const result = await dynamoDB.scan({
      TableName: process.env.ECOM_TABLE_NAME
    }).promise();

    ecomItems = result.Items;
  } catch(error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }  

  return {
    statusCode: 200,
    body: JSON.stringify({ ecomItems }),
  };
}

export const handler = middyMiddlewares(getEcomItems);


