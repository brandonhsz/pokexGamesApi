import Pokemon from '../../models/pokemon';

const removeAllData = async (req: any, res: any) => {

  Pokemon.remove({}, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'All data removed' })
  })

}

export default removeAllData;