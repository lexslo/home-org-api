// require express router
const router = require('express').Router();

// require /book-routes
const bookRoutes = require('./book-routes');

// use prefix /books
router.use('/books', bookRoutes);

// export router
module.exports = router;