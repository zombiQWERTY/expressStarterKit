import importDir       from 'import-dir';
import supertest       from 'supertest-as-promised';
import chai            from 'chai';
import app             from '../../src/server';

const routes  = importDir('./routes');
const request = supertest.agent(app.listen());
chai.should();

describe('Routes', () => {
  before(() => {

  });

  routes.test(request);
});
