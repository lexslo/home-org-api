// require express router
const router = require('express').Router();

// use routes in ./api
const apiRoutes = require('./api');

// use /api prefix before routes
router.use('/api', apiRoutes);

// export router
module.exports = router;