# AlgoMaster - Udemy Style Clone

A modern, responsive Express.js web application inspired by AlgoMaster.io with Udemy-style design. Features a clean navigation bar with Home and Login pages.

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.18-blue)
![EJS](https://img.shields.io/badge/EJS-v3.1-orange)

## 🌟 Features

### Navigation
- **Sticky Navigation Bar** - Always visible with smooth scrolling
- **Home Link** - Navigate to the homepage
- **Login Link** - Navigate to the login page
- **Search Bar** - Search for courses (desktop only)
- **Mobile Responsive** - Hamburger menu for mobile devices

### Home Page
- **Hero Section** - Gradient background with compelling CTA
- **Statistics Display** - 650K+ students, 50+ courses, 4.8★ rating
- **Featured Courses** - 8 course cards with:
  - Course images
  - Badges (Bestseller, Hot, New, Popular)
  - Ratings and reviews
  - Pricing (current and original)
  - Hover animations
- **Categories Section** - 6 category cards with icons
- **Testimonials** - Real user testimonials from Meta, Amazon, Google engineers
- **CTA Section** - Final call-to-action with gradient background

### Login Page
- **Split Design** - Visual left side, form on right side
- **Login Form** with:
  - Email input with validation
  - Password input with show/hide toggle
  - Remember me checkbox
  - Forgot password link
  - Form validation
- **Social Login** - Google and GitHub buttons
- **Sign Up Link** - For new users

### Design Features
- **Udemy-inspired Color Scheme** - Purple primary color (#a435f0)
- **Smooth Animations** - Hover effects and scroll animations
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface
- **Font Awesome Icons** - Beautiful icons throughout

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

## 🚀 Installation

### 1. Extract the Project
Extract the ZIP file to your desired location.

### 2. Open in VS Code
```bash
cd algomaster-udemy-style
code .
```

### 3. Install Dependencies
Open the terminal in VS Code (`` Ctrl+` `` or `Cmd+` `) and run:
```bash
npm install
```

This will install:
- Express.js (web framework)
- EJS (template engine)
- Nodemon (dev dependency for auto-restart)

## 🎯 Running the Application

### Development Mode (Recommended)
Auto-restarts server when files change:
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on **http://localhost:3000**

You should see:
```
╔════════════════════════════════════════╗
║   Server is running successfully!     ║
║                                        ║
║   🌐 URL: http://localhost:3000       ║
║   📁 Press Ctrl+C to stop              ║
╚════════════════════════════════════════╝
```

## 📁 Project Structure

```
algomaster-udemy-style/
├── node_modules/           # Dependencies (created after npm install)
├── public/                 # Static files
│   ├── css/
│   │   └── style.css      # Main stylesheet (Udemy-inspired design)
│   ├── js/
│   │   └── main.js        # Client-side JavaScript
│   └── images/            # Image assets (placeholder)
├── views/                  # EJS templates
│   ├── header.ejs         # Navigation bar (included in all pages)
│   ├── footer.ejs         # Footer (included in all pages)
│   ├── index.ejs          # Home page
│   └── login.ejs          # Login page
├── .gitignore             # Git ignore file
├── package.json           # Project configuration & dependencies
├── README.md              # This file
└── server.js              # Express server configuration
```

## 🎨 Pages Overview

### Home Page (`/`)
Navigate by clicking "Home" in navbar or visiting `http://localhost:3000`

**Sections:**
1. **Hero** - Welcome message with gradient background
2. **Featured Courses** - 8 course cards with ratings and pricing
3. **Categories** - 6 learning categories
4. **Testimonials** - Success stories from students
5. **CTA** - Final enrollment call-to-action

### Login Page (`/login`)
Navigate by clicking "Login" in navbar or visiting `http://localhost:3000/login`

**Features:**
- Email/password form with validation
- Password visibility toggle
- Remember me option
- Forgot password link
- Social login options (Google, GitHub)
- Sign up link

## 🛠️ Customization

### Change Colors
Edit CSS variables in `public/css/style.css`:
```css
:root {
  --primary-color: #a435f0;      /* Main purple */
  --primary-dark: #8710d8;       /* Darker purple */
  --secondary-color: #5624d0;    /* Secondary purple */
  /* ... more colors ... */
}
```

### Change Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to your desired port
```

### Add New Routes
In `server.js`:
```javascript
app.get('/your-route', (req, res) => {
  res.render('your-template', { title: 'Your Page' });
});
```

### Modify Content
Edit the EJS files in the `views/` directory:
- `header.ejs` - Navigation bar
- `footer.ejs` - Footer content
- `index.ejs` - Home page content
- `login.ejs` - Login page content

### Add New Pages
1. Create a new EJS file in `views/`
2. Add a route in `server.js`
3. Add a link in `header.ejs`

## 🔧 Technologies Used

### Backend
- **Express.js** - Fast, unopinionated web framework
- **EJS** - Embedded JavaScript templating
- **Node.js** - JavaScript runtime

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript** - Interactive features
- **Font Awesome 6** - Icon library

### Development
- **Nodemon** - Auto-restart during development

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎓 Learning Resources

### Express.js
- [Official Documentation](https://expressjs.com/)
- [Express.js Tutorial](https://www.youtube.com/watch?v=L72fhGm1tfE)

### EJS
- [Official Documentation](https://ejs.co/)
- [EJS Guide](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)

## 🚀 Next Steps & Enhancements

### Authentication
```bash
npm install bcrypt jsonwebtoken express-session
```
Implement:
- User registration
- Password hashing
- JWT tokens
- Session management

### Database Integration
```bash
npm install mongoose  # for MongoDB
# or
npm install pg        # for PostgreSQL
```
Add:
- User storage
- Course data
- Progress tracking

### Additional Features
- User dashboard
- Course enrollment
- Progress tracking
- Payment integration
- Course content pages
- User reviews
- Search functionality
- Email notifications

### Environment Variables
Create `.env` file:
```env
PORT=3000
DATABASE_URL=your_database_url
SESSION_SECRET=your_secret_key
JWT_SECRET=your_jwt_secret
```

Install dotenv:
```bash
npm install dotenv
```

In `server.js`:
```javascript
require('dotenv').config();
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

### Cannot Find Module
```bash
# Reinstall specific module
npm install express --save
```

## 📝 Notes

- Course images are from Unsplash (placeholders)
- Login form validates but doesn't authenticate (demo only)
- Social login buttons are UI-only (not connected to OAuth)
- Search bar is functional but doesn't perform actual search

## 📄 License

This is an educational project for learning purposes.

## 🤝 Contributing

Feel free to fork this project and add your own features!

## 📧 Support

For issues or questions:
1. Check this README
2. Review the code comments
3. Search for similar issues online

## 🎯 Success Tips

1. **Start the server** - Always run `npm install` first
2. **Check the console** - Look for errors in terminal and browser console
3. **Use browser DevTools** - Press F12 to inspect elements
4. **Experiment** - Try changing colors, text, and layouts
5. **Read the code** - Comments explain what each section does

---

**Made with ❤️ for learning Express.js and web development**

Happy Coding! 🚀
