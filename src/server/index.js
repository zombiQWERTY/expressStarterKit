import express    from 'express';

import middleware from './middleware';
import routes     from './routes';

const app = express();

app.use(middleware(app));
routes(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    message: error.message,
    error:   process.env.NODE_ENV === 'development' ? error : {}
  });
});

export default app;
