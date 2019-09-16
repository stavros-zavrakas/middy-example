'use strict';

module.exports = () => {
  return ({
    before: (handler, next) => {
        console.log('I am just establishint a db connection');
        
        return next();
    }
  });
};
