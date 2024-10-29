const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'The server is running smoothly!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Testing webhook with Jenkins
// Testing webhook setup
// Another test for webhook
