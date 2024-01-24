const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Handle requests for all routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// app.get('/page1', (req, res) => {
//     res.sendFile(path.join('client', 'dist', 'page1.html'));
// });
//
//
// app.get('/page2', (req, res) => {
//     res.sendFile(path.join('client', 'dist', 'page2.html'));
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
