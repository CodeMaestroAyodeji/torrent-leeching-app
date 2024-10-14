const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  // Enable CORS

app.get('/', (req, res) => {
  res.send('Hello this is from the backend now....');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
