const pg     = require('pg');
const config = require('../config/config.json');

const currentConfig = config[process.env.NODE_ENV || 'development'];

const conStringPri = `postgres://${currentConfig.username}:${currentConfig.password}@${currentConfig.host}/postgres`;

const createDB = () => {
  pg.connect(conStringPri, function(err, client, done) {
    if (err && err.code === 'ECONNREFUSED') { throw new Error(err); }

    client.query('CREATE DATABASE ' + currentConfig.database, (err) => {
      console.log(`Created database ${currentConfig.database}`);
      client.end();
    });
  });
};

createDB();
