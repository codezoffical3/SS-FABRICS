const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = parseInt(process.env.PORT, 10) || 5000;

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Successfully connected to MongoDB Atlas!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// --- ROUTES ---
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'SS FABRICS Backend is live and running!',
        status: 'success'
    });
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 SS FABRICS Server running on port ${PORT}`);
    console.log(`👉 Test here: http://localhost:${PORT}`);
    console.log(`=========================================`);
});