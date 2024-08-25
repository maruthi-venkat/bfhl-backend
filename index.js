const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// New route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the BFHL API!');
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: 'Nareddula Maruthi Venkat Reddy 20072004',
        email: 'venkat.21bcb7124@vitapstudent.ac.in',
        roll_number: '21BCB7124',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});
