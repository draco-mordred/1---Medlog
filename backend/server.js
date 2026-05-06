// ==========================
// server.js
// ==========================

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/auth', require('./routes/auth'));
app.use('/entries', require('./routes/entries'));
app.use('/upload', require('./routes/upload'));

app.listen(5000, () => console.log('Server running'));

// ==========================