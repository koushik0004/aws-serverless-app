// import core
import middy from '@middy/core'; // esm Node v14+

// import some middlewares
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';


export const middyMiddlewares = handler => middy(handler).use([
      jsonBodyParser(),
      httpErrorHandler(),
      httpEventNormalizer()
    ]);