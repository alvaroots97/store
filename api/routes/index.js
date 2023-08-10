const express = require('express');
const productsRouter = require('./api/productsRouter');
const usersRouter = require('./api/usersRouter');
const categoriesRouter = require('./api/categoriesRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
