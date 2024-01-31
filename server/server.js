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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
