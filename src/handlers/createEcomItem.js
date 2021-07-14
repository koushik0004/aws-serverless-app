import {v4 as uuid} from 'uuid';

async function createEcomItem(event, context) {
  const {title, description} = event.body;
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDay() + 1);

  const item = {
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
  return {
    statusCode: 200,
    body: JSON.stringify({item})
  };
}

export const handler = createEcomItem;