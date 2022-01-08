import { validationResult } from 'express-validator';

const showErrors = (req: any, res: any) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
}

export default showErrors;