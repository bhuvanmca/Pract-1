const express = require("express");

const router = express.Router();

const {
    findMostPopularUrl
} = require("../controllers/urlController");

router.get("/most-popular", findMostPopularUrl);

module.exports = router;
