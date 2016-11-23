import 'babel-polyfill';
import app    from './server';
import models from '../models';

const port = process.env.PORT || 8080;

models.sequelize.sync().then(function() {
  app.listen(port, () => {
    console.log(`Server started on port ${port}. Enviroment: ${process.env.NODE_ENV}`);
  });
  app.on('error', error => {
    if (error.syscall !== 'listen') { throw error; }
    if (error.code === 'EACCES') { console.error('Port requires elevated privileges'); }
    if (error.code === 'EADDRINUSE') { console.error('Port is already in use'); }
    process.exit(1);
  });
});

