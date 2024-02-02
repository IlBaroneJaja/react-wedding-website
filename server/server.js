const express = require('express');
const cors = require('cors');
const path = require('path');
const {enforceHttps} = require("./middlewares/forcehttps");
const app = express();

app.use(enforceHttps);
app.use(cors()); // Enable CORS

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Handle requests for all routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
