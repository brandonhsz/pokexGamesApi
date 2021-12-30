const { validationResult } = require('express-validator');

const showErrors = (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
}

module.exports = showErrors;