const router = require('express').Router();
let Orderitem = require('../models/orderitem.model');
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Orderitem.find()
    .then(orderitems => res.json(orderitems))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const price = Number(req.body.price);
  const quantity = Number(req.body.quantity);
  const discount = Number(req.body.discount);

  const newOrderitem = new Orderitem({
    price,
    quantity,
    discount,
  });

  newOrderitem.save()
  .then(() => res.json('Orderitem added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Orderitem.findById(req.params.id)
    .then(orderitem => res.json(orderitem))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Orderitem.findByIdAndDelete(req.params.id)
    .then(() => res.json('Orderitem deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Orderitem.findById(req.params.id)
    .then(orderitem => {
        orderitem.price = Number(req.body.price);
        orderitem.quantity = Number(req.body.quantity);
        orderitem.discount = Number(req.body.discount);

      orderitem.save()
        .then(() => res.json('Orderitem updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/item/:id').post((req, res) => {
  Orderitem.findById(req.params.id)
    .then(orderitem => {
      const quantity = Number(req.body.quantity);
      const price = Number(req.body.price);
      const status = req.body.status;
      const category = req.body.category;
      const description = req.body.description;
      const fromdate = Date.parse(req.body.fromdate);
      const todate = Date.parse(req.body.todate);
    
      const item = new Item({
        quantity,
        price,
        status,
        category,
        description,
        fromdate,
        todate,
      });
    
      orderitem.items.push(item);

      item.save()
      orderitem.save()
        .then(() => res.json('New Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;