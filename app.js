const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const animRoutes = require('./routes/animRoutes');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Utiliser CORS en premier
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/animateur',animRoutes );

// Connect to MongoDB
mongoose.connect("mongodb+srv://amraniheitem:Heitem123@star-event.g7zaana.mongodb.net/?retryWrites=true&w=majority&appName=star-event", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
