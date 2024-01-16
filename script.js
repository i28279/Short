const express = require('express');
const app = express();
const port = 3000; // Or any available port

const urlMappings = {}; // Store long URL to short code mappings

app.post('/shorten', (req, res) => {
  const longURL = req.body.longURL;
  const shortCode = createRandomCode(5);
  urlMappings[shortCode] = longURL;

  res.redirect(`/${shortCode}`);
});

app.get('/:shortCode', (req, res) => {
  const longURL = urlMappings[req.params.shortCode];
  if (longURL) {
    res.redirect(longURL);
  } else {
    res.status(404).send('Short URL not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
