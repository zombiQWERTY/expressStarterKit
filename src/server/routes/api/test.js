import express from 'express';

import getTest from './test/getTest';

const router = express.Router();

export default (app, prefix) => {
  router.get('/test', getTest);

  app.use(prefix, router);
};
