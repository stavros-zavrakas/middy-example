const middy = require('middy');

const asyncMw = require('./asyncMw');
const dbConnect = require('./dbConnect');
const warmup = require('./warmup');

const handler = async (event) => {
    console.log('inside handler', event);
    
    return 'Hello from Lambda';
};

exports.handler = middy(handler)
    .use(asyncMw())
    .use(warmup())
    .use(dbConnect());
