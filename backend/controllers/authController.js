const { createClient } = require('@supabase/supabase-js');
const User = require('../models/User');

// Initialize Supabase Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// --- SIGNUP LOGIC (Powered by Supabase) ---
exports.signup = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // 1. Ask Supabase to create the user and hash their password
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (authError) return res.status(400).json({ message: authError.message });

        // 2. Save their profile info in our MongoDB database
        const newUser = new User({
            supabaseId: authData.user.id, // Supabase's unique ID
            name,
            email,
            phone
        });
        await newUser.save();

        // 3. Send success response back to frontend
        res.status(201).json({ 
            message: 'User created successfully via Supabase!', 
            session: authData.session, // Contains the JWT token for the frontend
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error during signup', error: error.message });
    }
};

// --- LOGIN LOGIC (Powered by Supabase) ---
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Ask Supabase to verify the email and password
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (authError) return res.status(400).json({ message: 'Invalid email or password.' });

        // 2. Fetch the user's extra details from our MongoDB database
        const user = await User.findOne({ supabaseId: authData.user.id });

        // 3. Send success response back to frontend
        res.status(200).json({ 
            message: 'Login successful via Supabase!', 
            session: authData.session, // Contains the JWT token for the frontend
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error during login', error: error.message });
    }
};