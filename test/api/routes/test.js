import chai  from 'chai';
import Faker from 'faker';

const expect = chai.expect;

Faker.locale = 'ru';

export default function test(request) {
  describe('Gallery', () => {
    it('should do smth', done => {
      request
        .get('/api/test')
        .expect(200)
        .end(function(err, res) {
          if (err) { return done(err); }
          done();
        });
    });
  });
}
