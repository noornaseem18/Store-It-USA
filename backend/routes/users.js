const router = require('express').Router();
const axios = require('axios');
let User = require('../models/user.model');
let Transaction = require('../models/transaction.model');
let Item = require('../models/item.model');
let Order = require('../models/order.model');
let Address = require('../models/address.model');


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const roleid = req.body.roleid;
  const firstname = req.body.firstname;
  const middlename = req.body.middlename;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    roleid,
    firstname,
    middlename,
    lastname,
    username,
    email,
    password,
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.roleid = req.body.roleid;
      user.firstname = req.body.firstname;
      user.middlename = req.body.middlename;
      user.lastname = req.body.lastname;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/transaction/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const code = Number(req.body.code);
      const mode = req.body.mode;
      const status = req.body.status;
    
      const transaction = new Transaction({
        code,
        mode,
        status,
      });
    
      user.transactions.push(transaction);

      transaction.save()
      user.save()
        .then(() => res.json('New Transaction Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/item/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
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

  const item = new Item({
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
      user.items.push(item);

      item.save()
      user.save()
        .then(() => res.json('New Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/item/:id').get((req, res) => {
  User.findById(req.params.id)
  .then(user => res.json(user.items))
  .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/item/:id1/:id2').get((req, res) => {
  User.findById(req.params.id1)
    .then(user => {
      for (var i=0; i < user.items.length; i++) {
        if (user.items[i].id === req.params.id2)
        {
          res.json(user.items[i])
        }
    } 
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/item/:id1/:id2').post((req, res) => {
  User.findById(req.params.id1)
    .then(user => {

      for (var i=0; i < user.items.length; i++) {
        if (user.items[i].id === req.params.id2)
        {
          user.items[i].name = req.body.name;
          user.items[i].category = req.body.category;
          user.items[i].palletsquantity = Number(req.body.palletsquantity);
          user.items[i].boxesquantity = Number(req.body.boxesquantity);
          user.items[i].description = req.body.description;
          user.items[i].location = req.body.location;
          user.items[i].paid = req.body.paid;
          user.items[i].status = req.body.status;
          user.items[i].storedfrom = Date.parse(req.body.storedfrom);
          user.items[i].storeduptill = Date.parse(req.body.storeduptill);
          user.items[i].price = Number(req.body.price);
          
          user.items[i].save();
        }
    }
    user.save()
    .then(() => res.json('Item updated!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
 
 router.route('/item/:id1/:id2').delete((req, res) => {
  User.updateOne(( { _id: req.params.id1 }, { $pull: { items: { _id: req.params.id2 }, }, } ))
  .then(() => res.json('Item deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/order/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
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
    
      user.orders.push(order);

      Order.save()
      user.save()
        .then(() => res.json('New Order Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/address/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const quantity = Number(req.body.quantity);
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const phonenumber = req.body.phonenumber;
      const line1 = req.body.line1;
      const line2 = req.body.line2;
      const city = req.body.city;
      const country = req.body.country;
      const email = req.body.email;
    
      const address = new Address({
        quantity,
        firstname,
        lastname,
        phonenumber,
        line1,
        line2,
        city,
        country,
        email,
      });
    
      user.addresses.push(address);

      address.save()
      user.save()
        .then(() => res.json('New Adress Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;