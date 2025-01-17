const express = require('express');
const app = express();
const knex = require('./database')

app.get('/', async (req, res) => {
  const name = await knex.select('user').from('user')
  res.send(name);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});
