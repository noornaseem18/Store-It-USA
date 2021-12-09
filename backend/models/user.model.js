const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String},
}, {
  timestamps: true,
});

const boxSchema = new Schema({
  description: { type: String},
  quantity: { type: Number, required: true },
  products: [productSchema],
}, {
  timestamps: true,
});

const palletSchema = new Schema({
  description: { type: String},
  quantity: { type: Number, required: true },
  boxes: [boxSchema],
}, {
  timestamps: true,
});

const itemSchema = new Schema({
  name: { type: String, required: true},
  category: { type: String, required: true},
  palletsquantity: { type: Number, required: true },
  boxesquantity: { type: Number, required: true },
  description: { type: String},
  location: { type: String, default: '-'},
  paid: { type: String, default: 'Not Paid'},
  status: { type: String, default: 'Not Recieved' },
  storedfrom: { type: Date, required: true },
  storeduptill: { type: Date, required: true },
  price: { type: Number, required: true },
  pallets: [palletSchema],
}, {
  timestamps: true,
});

const orderitemSchema = new Schema({
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discount: { type: Number, required: true },
  items: [itemSchema],
}, {
  timestamps: true,
});

const orderSchema = new Schema({
  status: { type: String, required: true },
  subtotal: { type: Number, required: true },
  itemdiscount: { type: Number },
  shipping: { type: Number },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  promo: { type: String },
  discount: { type: Number },
  grandtotal: { type: Number, required: true },
  orderitems: [orderitemSchema],
}, {
  timestamps: true,
});

const transactionSchema = new Schema({
  code: { type: Number, required: true},
  mode: { type: String, required: true },
  status: { type: String, required: true },
  orders: [orderSchema],
}, {
  timestamps: true,
});

const addressSchema = new Schema({
  quantity: { type: Number, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  line1: { type: String, required: true },
  line2: { type: String},
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  transactions: [transactionSchema],
  
}, {
  timestamps: true,
});

const userSchema = new Schema({
  roleid: { type: String,  default: 'User' },
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  transactions: [transactionSchema],
  items: [itemSchema],
  orders: [orderSchema],
  addresses: [addressSchema],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;