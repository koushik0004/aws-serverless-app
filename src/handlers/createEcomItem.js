import {v4 as uuid} from 'uuid';
import AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function createEcomItem(event, context) {
  const {title, description} = event.body;
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDay() + 1);

  const ecomItem = {
    id: uuid(),
    title,
    description,
    status: 'AVAILABLE',
    price: {
      amount: 0,
      currency: 'USD'
    },
    createdAt: startDate.toISOString(),
    endingAt: endDate.toISOString()
  }

  await dynamoDB.put({
    TableName: process.env.ECOM_TABLE_NAME,
    Item: ecomItem,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ecomItem})
  };
}

export const handler = createEcomItem;