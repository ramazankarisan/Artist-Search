const express = require('express');
const app = express();

const artistRoute = require('./routes/artistRoute')

app.use('/artist', artistRoute);


app.listen(process.env.PORT || 4000, () => {
  console.log(` the server is starting on port ${process.env.PORT || 4000} `);
});