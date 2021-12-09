const router = require('express').Router();
let Order = require('../models/order.model');
let Transaction = require('../models/transaction.model');

router.route('/').get((req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const code = Number(req.body.code);
  const mode = req.body.mode;
  const status = req.body.status;

  const newTransaction = new Transaction({
    code,
    mode,
    status,
  });

  newTransaction.save()
  .then(() => res.json('Transaction added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => {
        transaction.code = Number(req.body.code);
        transaction.mode = req.body.mode;
        transaction.status = req.body.status;


      transaction.save()
        .then(() => res.json('Transaction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/order/:id').post((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => {
      const status = req.body.status;
      const subtotal = Number(req.body.subtotal);
      const itemdiscount = Number(req.body.itemdiscount);
      const shipping = Number(req.body.shipping);
      const tax = Number(req.body.tax);
      const total = Number(req.body.total);
      const promo = req.body.promo;
      const discount = Number(req.body.discount);
      const grandtotal = Number(req.body.grandtotal);
    
      const order = new Order({
        status,
        subtotal,
        itemdiscount,
        shipping,
        tax,
        total,
        promo,
        discount,
        grandtotal,
      });
    
      transactions.orders.push(order);

      order.save()
      transaction.save()
        .then(() => res.json('New Order Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;