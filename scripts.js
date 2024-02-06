const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a User model
const User = mongoose.model('User', {
  username: String,
  email: String,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/register', async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = await User.create({ username, email });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

document.addEventListener('DOMContentLoaded', function () {
// Get the current page name from the title
const currentPage = document.title;
  
    // Display the current page in the footer
    const currentPageElement = document.getElementById('current-page');
    currentPageElement.textContent = `You are here: ${currentPage}`;
  });

  function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}
