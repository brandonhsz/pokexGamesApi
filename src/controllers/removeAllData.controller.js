const Pokemon = require('../models/pokemon')
const Admin = require('../models/adminUsers')
const removeAllData = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username })

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

module.exports = removeAllData;