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

const Box = mongoose.model('Box', boxSchema);

module.exports = Box;