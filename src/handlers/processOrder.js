async function processOrder(event, context) {
  return {
    order: {
      id: 'new'
    }
  }
}

export const handler = processOrder;