const router = require('express').Router();
let Pallet = require('../models/pallet.model');
let Box = require('../models/box.model');

router.route('/').get((req, res) => {
  Pallet.find()
    .then(pallets => res.json(pallets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const quantity = Number(req.body.quantity);

  const newPallet = new Pallet({
    description,
    quantity,
  });

  newPallet.save()
  .then(() => res.json('Pallet added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Pallet.findById(req.params.id)
    .then(pallet => res.json(pallet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Pallet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Pallet deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Pallet.findById(req.params.id)
    .then(pallet => {
      pallet.description = req.body.description;
      pallet.quantity =Number(req.body.quantity);

      pallet.save()
        .then(() => res.json('Pallet updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/box/:id').post((req, res) => {
  Pallet.findById(req.params.id)
    .then(pallet => {
      const description = req.body.description;
      const quantity = Number(req.body.quantity);
    
      const box = new Box({
        description,
        quantity,
      });
    
      pallet.boxes.push(box);

      box.save()
      pallet.save()
        .then(() => res.json('New Box Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/box/:id').get((req, res) => {
  Pallet.findById(req.params.id)
  .then(pallet => res.json(palelt.boxes))
  .catch(err => res.status(400).json('Error: ' + err)); 
});

module.exports = router;