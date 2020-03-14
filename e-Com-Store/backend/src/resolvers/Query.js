const { forwardTo } = require('prisma-binding');

const Query = {
  // use same db logic
  items: forwardTo('db'),
};

module.exports = Query;
