import {v4 as uuid} from 'uuid';
import AWS from 'aws-sdk';

async function createEcomItem(event, context) {
  const {title, description} = event.body;
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDay() + 1);

  const auction = {
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
    Item: auction,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({auction})
  };
}

export const handler = createEcomItem;