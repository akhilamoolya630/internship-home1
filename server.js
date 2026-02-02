const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home - AlgoMaster' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login - AlgoMaster' });
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Here you would normally validate credentials
  console.log('Login attempt:', { email, password });
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   Server is running successfully!     ║
║                                        ║
║   🌐 URL: http://localhost:${PORT}       ║
║   📁 Press Ctrl+C to stop              ║
╚════════════════════════════════════════╝
  `);
});
