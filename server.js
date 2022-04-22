// require express
const express = require('express');
// require routes once set up
const routes = require('./routes');

// declare PORT variable
const PORT = process.env.PORT || 3001;
// store express() in app
const app = express();

// use express.json()
app.use(express.json());
// use express.urlencoded extended true to parse incoming data
app.use(express.urlencoded({ extended: true }));
// use routes once set up
app.use(routes);

// listen on PORT
app.listen(PORT, () => {
    console.log(`API Server running on ${PORT}`);
});
