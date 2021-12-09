const router = require('express').Router();
let Order = require('../models/order.model');
let Orderitem = require('../models/orderitem.model');

router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const status = req.body.status;
  const subtotal = Number(req.body.subtotal);
  const itemdiscount = Number(req.body.itemdiscount);
  const shipping = Number(req.body.shipping);
  const tax = Number(req.body.tax);
  const total = Number(req.body.total);
  const promo = req.body.promo;
  const discount = Number(req.body.discount);
  const grandtotal = Number(req.body.grandtotal);

  const newOrder = new Order({
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

  newOrder.save()
  .then(() => res.json('Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('Order deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
        order.status = req.body.status;
        order.subtotal = Number(req.body.subtotal);
        order.itemdiscount = Number(req.body.itemdiscount);
        order.shipping = Number(req.body.shipping);
        order.tax = Number(req.body.tax);
        order.total = Number(req.body.total);
        order.promo = req.body.promo;
        order.discount = Number(req.body.discount);
        order.grandtotal = Number(req.body.grandtotal);

      order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/orderitem/:id').post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      const price = Number(req.body.price);
      const quantity = Number(req.body.quantity);
      const discount = Number(req.body.discount);
    
      const orderitem = new Orderitem({
        price,
        quantity,
        discount,
      });
    
      order.orderitems.push(orderitem);

      orderitem.save()
      order.save()
        .then(() => res.json('New Order Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;