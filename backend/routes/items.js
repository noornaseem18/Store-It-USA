const router = require('express').Router();
let Item = require('../models/item.model');
let Pallet = require('../models/pallet.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const palletsquantity = Number(req.body.palletsquantity);
  const boxesquantity = Number(req.body.boxesquantity);
  const description = req.body.description;
  const location = req.body.location;
  const paid = req.body.paid;
  const status = req.body.status;
  const storedfrom = Date.parse(req.body.storedfrom);
  const storeduptill = Date.parse(req.body.storeduptill);
  const price = Number(req.body.price);

  const newItem = new Item({
    name,
    category,
    palletsquantity,
    boxesquantity,
    description,
    location,
    paid,
    status,
    storedfrom,
    storeduptill,
    price,
  });

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.name;
      item.category = req.body.category;
      item.palletsquantity = Number(req.body.palletsquantity);
      item.boxesquantity = Number(req.body.boxesquantity);
      item.description = req.body.description;
      item.location = req.body.location;
      item.paid = req.body.paid;
      item.status = req.body.status;
      item.storedfrom = Date.parse(req.body.storedfrom);
      item.storeduptill = Date.parse(req.body.storeduptill);
      item.price = Number(req.body.price);

      item.save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/pallet/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      const description = req.body.description;
      const quantity = Number(req.body.quantity);
    
      const pallet = new Pallet({
        description,
        quantity,
      });
    
      items.pallets.push(pallet);

      pallet.save()
      item.save()
        .then(() => res.json('New Pallet Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/pallet/:id').get((req, res) => {
  Item.findById(req.params.id)
  .then(item => res.json(item.pallets))
  .catch(err => res.status(400).json('Error: ' + err)); 
});

module.exports = router;