import { body } from 'express-validator';
import isAuthorized from '../middlewares/auth.middlewares';
import showErrors from './showErrors';
const newAdminValidator = [
  body('email', 'Email is required').trim().isString().isEmail().not().isEmpty(),
  body('password', 'password is required and need to be a string').trim().isString().not().isEmpty(),
  body('username', 'username needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
  isAuthorized,
  showErrors
]

export default newAdminValidator;