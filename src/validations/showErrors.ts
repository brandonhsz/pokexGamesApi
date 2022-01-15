import e from 'express';
import { validationResult } from 'express-validator';

const showErrors = (req: e.Request, res: e.Response, next: e.NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export default showErrors;