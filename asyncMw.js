'use strict';

const {promisify} = require('util');
const sleep = promisify(setTimeout);

module.exports = () => {
  return ({
    before: async (handler) => {
      await sleep(1000);
      console.log('after sleeping!');
      
      return;
    }
  });
};
