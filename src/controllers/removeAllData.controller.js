const Pokemon = require('../models/pokemon')

const removeAllData = (req, res) => {

  if (req.body.user !== process.env.ADMIN_USER || req.body.password !== process.env.ADMIN_PASS) {
    res.status(401).json({ message: 'Unauthorized' });

  } else {

    Pokemon.remove({}, (err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'All data removed' })
    })
  }
}

module.exports = removeAllData;