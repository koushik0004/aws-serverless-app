async function createEcomItem(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({action: 'create ecommerce item'})
  };
}

export const handler = createEcomItem;