const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Connects the order to the registered user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // List of items purchased in this single order
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      stitchStatus: { type: String }, // e.g., 'Stitched' or 'Unstitched'
      color: { type: String }
    }
  ],
  // Delivery details locked at time of order creation
  shippingAddress: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, default: '' }
  },
  // Payment specifics (tailored for Cash on Delivery)
  paymentMethod: {
    type: String,
    enum: ['Cash on Delivery'],
    default: 'Cash on Delivery'
  },
  isPaid: {
    type: Boolean,
    default: false // Admin turns this to true once cash is received from rider
  },
  paidAt: {
    type: Date
  },
  // Total cost calculation
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  // Order delivery tracking status
  orderStatus: {
    type: String,
    required: true,
    enum: ['Pending', 'Processing', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  deliveredAt: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);