import wrap    from 'express-async-wrap';
import express from 'express';

const router = express.Router();

export default (app, prefix) => {
  router.get('/', welcome);

  app.use(prefix, router);
};

const welcome = wrap(async (req, res, next) => {
  res.render('welcome');
});
