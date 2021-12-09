const router = require('express').Router();
let Address = require('../models/address.model');
let Transaction = require('../models/transaction.model');

router.route('/').get((req, res) => {
  Address.find()
    .then(addresses => res.json(addresses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const quantity = Number(req.body.quantity);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  const line1 = req.body.line1;
  const line2 = req.body.line2;
  const city = req.body.city;
  const country = req.body.country;
  const email = req.body.email;

  const newAddress = new Address({
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

  newAddress.save()
  .then(() => res.json('Address added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Address.findById(req.params.id)
    .then(address => res.json(address))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Address.findByIdAndDelete(req.params.id)
    .then(() => res.json('Address deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Address.findById(req.params.id)
    .then(address => {
        address.quantity = Number(req.body.quantity);
        address.firstname = req.body.firstname;
        address.lastname = req.body.lastname;
        address.phonenumber = req.body.phonenumber;
        address.line1 = req.body.line1;
        address.line2 = req.body.line2;
        address.city = req.body.city;
        address.country = req.body.country;
        address.email = req.body.email;

      address.save()
        .then(() => res.json('Address updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/transaction/:id').post((req, res) => {
  Address.findById(req.params.id)
    .then(address => {
      const code = Number(req.body.code);
      const mode = req.body.mode;
      const status = req.body.status;
    
      const transaction = new Transaction({
        code,
        mode,
        status,
      });
    
      address.transactions.push(transaction);

      transaction.save()
      address.save()
        .then(() => res.json('New Transaction Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;