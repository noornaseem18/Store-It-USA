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

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;