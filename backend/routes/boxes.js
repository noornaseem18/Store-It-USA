const router = require('express').Router();
let Box = require('../models/box.model');
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Box.find()
    .then(boxes => res.json(boxes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const quantity = Number(req.body.quantity);

  const newBox = new Box({
    description,
    quantity,
  });

  newBox.save()
  .then(() => res.json('Box added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Box.findById(req.params.id)
    .then(box => res.json(box))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Box.findByIdAndDelete(req.params.id)
    .then(() => res.json('Box deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Box.findById(req.params.id)
    .then(box => {
      box.description = req.body.description;
      box.quantity =Number(req.body.quantity);

      box.save()
        .then(() => res.json('Pallet updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/product/:id').post((req, res) => {
  Box.findById(req.params.id)
    .then(box => {
      const title = req.body.title;
      const summary = req.body.summary;
      
      const product = new Product({
        title,
        summary,
      });

      box.products.push(product);
      
      product.save()
      box.save()
        .then(() => res.json('New product Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/product/:id').get((req, res) => {
  Box.findById(req.params.id)
  .then(box => res.json(box.products))
  .catch(err => res.status(400).json('Error: ' + err)); 
});


module.exports = router;