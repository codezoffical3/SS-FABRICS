const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  // 1. Target Audience/Category
  category: { 
    type: String, 
    required: true, 
    enum: ['Men', 'Women', 'Jewellery', 'Accessories'] 
  },
  // 2. Stitch Status (Crucial for your client)
  stitchStatus: { 
    type: String, 
    required: true, 
    enum: ['Stitched', 'Unstitched', 'N/A'], // N/A is used for Jewellery or Accessories
    default: 'Unstitched'
  },
  // 3. Seasonal categorization
  season: { 
    type: String, 
    enum: ['Summer', 'Winter', 'Spring', 'Autumn', 'Festive', 'All-Season'],
    default: 'All-Season'
  },
  // 4. Color tracking
  color: { 
    type: String, 
    required: true 
  },
  // 5. Promotional Fields
  discountPercentage: { 
    type: Number, 
    default: 0, 
    min: 0, 
    max: 100 // Ensures discount doesn't exceed 100%
  },
  exclusiveOffer: { 
    type: Boolean, 
    default: false // Check this to feature it as a "Rapid Seller" or "Limited Edition"
  },
  stock: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  imageUrl: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);