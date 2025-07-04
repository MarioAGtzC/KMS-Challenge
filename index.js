const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use('/api', require('./routes'));