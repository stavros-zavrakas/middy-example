'use strict';

const warmer = require('lambda-warmer');

module.exports = () => {
  return ({
    before: async (handler) => {
      if (await warmer(handler.event)) {
        console.log('I am just warming up and connection has been established successfully.');
        
        return 'warming_up';
      }
    },
    onError: (handler, next) => {
      console.log('on warmup error');
    }
  });
};
