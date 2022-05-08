const express = require('express');
const router = express.Router();

// imports for middlewares and controllers
const { handleArtistSearch } = require('../controllers/artistController');
const { validateResult } = require('../middlewares/validateResult');

// route for searching artist by name parameter
router.get("/search/:name", validateResult, handleArtistSearch)

module.exports = router;
