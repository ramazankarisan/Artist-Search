const express = require('express');
const app = express();

// import for routes
const artistRoute = require('./routes/artistRoute')

// endpoint start for artists
app.use('/artist', artistRoute);

// if server is listening
app.listen(process.env.PORT || 4000, () => {
  console.log(` the server is starting on port ${process.env.PORT || 4000} `);
});