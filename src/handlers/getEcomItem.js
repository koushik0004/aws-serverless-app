import AWS from 'aws-sdk';
import createErrors from 'http-errors';
import {middyMiddlewares} from '../utils';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function getEcomItemById(id) {
  let ecomItem;
  try { 
    const result = await dynamoDB.get({
      TableName: process.env.ECOM_TABLE_NAME,
      Key: {id},
    }).promise();

    ecomItem = result.Item;
  } catch(error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }

  if(!ecomItem || Object.keys(ecomItem).length === 0) {
    throw new createErrors.NotFound(`Requested for the item with ${id} not available`);
  }
  return ecomItem;
}

async function getEcomItem(event, context) {
  let ecomItem;
  const {id} = event.pathParameters;
  ecomItem = await getEcomItemById(id);

  return {
    statusCode: 200,
    body: JSON.stringify({ auction }),
  };
}

export const handler = middyMiddlewares(getEcomItem);