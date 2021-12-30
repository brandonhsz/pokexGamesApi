const { body } = require('express-validator');
const newAdminValidator = [
  body('username', 'Username is required and need to be a string').trim().isString().not().isEmpty().isLength({ min: 6, max: 16 }),
  body('username', 'Username needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),

  body('password', 'Password is required and need to be a string').trim().isString().not().isEmpty().isLength({ min: 6, max: 16 }),
  body('password', 'Password needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),

  body('newusername', 'Newusername is required and need to be a string').trim().isString().not().isEmpty(),
  body('newusername', 'Newusername needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),

  body('newpassword', 'Newpassword is required and need to be a string').trim().isString().not().isEmpty(),
  body('newusername', 'Newusername needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
]

module.exports = newAdminValidator;