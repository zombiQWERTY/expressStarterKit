import wrap   from 'express-async-wrap';
import models from '../../../../../models';

/**
 * @api {get} /api/test Get test
 * @apiName GetTest
 * @apiGroup Test
 *
 * @apiVersion 1.0.0
 */

export default wrap(async (req, res, next) => {
  let items;
  try {
    items = await models.Test.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
  } catch (e) {
    return res.status(500).send({ message: e.message, errors: e.errors });
  }

  return res.status(200).send(items);
});
