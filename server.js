const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  throw Error(`You're not supposed to be here`);
  res.send('WELCOME')
})

app.use('/api/v1', require('./api/index.js'));

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
})

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});