const express = require('express');
require('dotenv').config();
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
