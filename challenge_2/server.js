const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/bitcoin', (req, res) => {
  const {start, end} = req.query;
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json', {
    params: {
      start: start,
      end: end
    }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

app.listen(PORT, () => console.log(`App listening on port ${port}!`));