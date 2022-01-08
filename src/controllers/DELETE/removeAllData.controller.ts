import Pokemon from '../../models/pokemon';
import Admin from '../../models/adminUsers';
import { validationResult } from 'express-validator';
const removeAllData = async (req: any, res: any) => {
  const admin = await Admin.findOne({ username: req.body.username })

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (req.body.username !== admin.username || req.body.password !== admin.password) {
    res.status(401).json({ message: 'Unauthorized' });

  }
  else {

    Pokemon.remove({}, (err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'All data removed' })
    })
  }
}

export default removeAllData;