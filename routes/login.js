const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the login.html file
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

module.exports = router;
