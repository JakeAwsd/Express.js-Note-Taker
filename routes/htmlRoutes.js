const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});

// All other routes respond with the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'));
});

module.exports = router;
