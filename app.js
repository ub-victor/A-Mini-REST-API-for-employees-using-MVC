const express = require('express');
const app = express();
const path = require('path');
const PORT = 3500;

// Middleware to parse JSON body
app.use(express.json());

// Routes
app.use('/employees', require('./routes/employees'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
