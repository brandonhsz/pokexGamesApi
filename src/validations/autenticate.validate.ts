import { body } from 'express-validator';

const autenticateValidator = [
  body('username', 'Username is required').not().isEmpty(),
  body('password', 'Password is required').not().isEmpty()
]

export default autenticateValidator;