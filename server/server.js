const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router.js');
const genreRouter = require('./routes/genre.router.js')


app.use(bodyParser.json());

app.use('/movies', movieRouter);
app.use('/genres', genreRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
});