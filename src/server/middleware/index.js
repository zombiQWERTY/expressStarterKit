import compose        from 'compose-middleware';
import logger         from 'express-log';
import cors           from 'cors';
import bodyParser     from 'body-parser';
import qs             from 'express-qs-parser';
import serveStatic    from 'serve-static';

import corsConfig     from './config';
import { PUBLIC_DIR } from '../consts';

export default function middleware(app) {
  app.set('views', `${__dirname}/../views`);
  app.set('view engine', 'pug');
  return compose.compose([
    logger(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cors(corsConfig),
    qs({}),
    serveStatic(PUBLIC_DIR)
  ]);
}
