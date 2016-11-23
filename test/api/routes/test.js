import chai  from 'chai';
import Faker from 'faker';
import models from '../../../models';

const expect = chai.expect;

Faker.locale = 'ru';

export default function test(request) {
  describe('Gallery', () => {
    it('should do smth', done => {
      request
        .post('/api/test')
        .expect(200)
        .end(function(err, res) {
          if (err) { return done(err); }
          done();
        });
    });
  });
}
