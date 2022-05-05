const express = require('express');
const router = express.Router();
const { handleArtistSearch } = require('../controllers/artistController')

router.get("/search/:name", handleArtistSearch)

module.exports = router;
