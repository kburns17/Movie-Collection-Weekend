const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const swapiRouter = require('./routes/swapi.router.js');


app.use(bodyParser.json());

app.use('/swapi', swapiRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
});