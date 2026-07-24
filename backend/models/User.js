const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  supabaseId: { 
    type: String, 
    required: true, 
    unique: true 
  }, // This links to their Supabase account
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    postalCode: { type: String, default: '' }
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);