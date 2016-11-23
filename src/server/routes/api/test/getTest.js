import wrap from 'express-async-wrap';

/**
 * @api {get} /api/test Get test
 * @apiName GetTest
 * @apiGroup Test
 *
 * @apiVersion 1.0.0
 */

export default wrap(async (req, res, next) => {
  return res.status(200).send({});
});
