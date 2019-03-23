const router = require("express").Router();
const bookRoutes = require("./books");
const newsFeed = require("./news-feed");

// Book routes
router.use("/books", bookRoutes);
router.use("/news-feed", newsFeed);

module.exports = router;
