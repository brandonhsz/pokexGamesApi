const Admin = require('../models/adminUsers')
const { validationResult } = require('express-validator');

const addAdmin = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username })

  if (req.body.username !== admin.username || req.body.password !== admin.password) {
    res.status(401).json({ message: 'Unauthorized' });

  } else {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { newusername, newpassword } = req.body;
    const newAdmin = { username: newusername, password: newpassword };
    const admin = new Admin(newAdmin);
    await admin.save();
    res.json({ message: 'Admin added' });
  }

}

module.exports = addAdmin;