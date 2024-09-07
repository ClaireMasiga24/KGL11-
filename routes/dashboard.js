const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// Other dashboard-related routes can be added here

module.exports = router;
