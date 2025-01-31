// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String, // e.g., 'Starters', 'Main', etc.
  description: String,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
