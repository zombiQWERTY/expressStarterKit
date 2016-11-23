import 'babel-polyfill';
import app                               from './server';
import { connectDatabase }               from './server/db';
import { development, test, production } from './server/db/config';

const port = process.env.PORT || 8080;
const databaseConfig = process.env.NODE_ENV === 'production' ? production : development;

(async() => {
  try {
    const info = await connectDatabase(databaseConfig);
    console.log(`Connected to ${info.host}:${info.port}/${info.name} database`);
  } catch (error) {
    console.error('Unable to connect to database', error);
  }

  app.listen(port, () => console.log(`Server started on port ${port}. Enviroment: ${process.env.NODE_ENV}`));
  app.on('error', error => {
    if (error.syscall !== 'listen') { throw error; }
    if (error.code === 'EACCES') { console.error('Port requires elevated privileges'); }
    if (error.code === 'EADDRINUSE') { console.error('Port is already in use'); }
    process.exit(1);
  });
})();
