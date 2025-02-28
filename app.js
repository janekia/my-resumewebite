
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Required to resolve file paths
const app = express();
const port = 8000;

// Middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


// POST route for handling form submissions
app.post('/send-message', async (req, res) => {
    const { email, subject, message } = req.body;

    // Log incoming form data for debugging
    console.log('Received Form Data:', req.body);

    if (!email || !subject || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Configure nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'janekia.pinkard@gmail.com',
            pass: 'aviz hnbx mdyf jfwd', // Use the correct App Password here
        },
    });

    let mailOptions = {
        from: email,
        to: 'janekia.pinkard@gmail.com',
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Message sent successfully');
        res.send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send the message.');
    }
});

// Serve the index.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
