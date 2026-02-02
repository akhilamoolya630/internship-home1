// Main JavaScript file for AlgoMaster (Udemy Style)

let currentSlide = 0;
const carousel = document.getElementById('testimonialsCarousel');

document.addEventListener('DOMContentLoaded', function() {
  console.log('AlgoMaster (Udemy Style) loaded successfully!');

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const icon = this.querySelector('i');
      
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && mobileMenuBtn) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = mobileMenuBtn.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation on scroll for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe course cards
  document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Observe category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Observe testimonial cards
  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Add click animation for testimonial cards
  document.querySelectorAll('.testimonial-card.clickable').forEach(card => {
    card.addEventListener('click', function() {
      // Add a pulse animation on click
      this.style.animation = 'pulse 0.3s ease';
      setTimeout(() => {
        this.style.animation = '';
      }, 300);
    });
  });

  // Add CSS animation for pulse effect
  if (!document.querySelector('#testimonial-pulse-style')) {
    const style = document.createElement('style');
    style.id = 'testimonial-pulse-style';
    style.textContent = `
      @keyframes pulse {
        0% { transform: translateY(-8px) scale(1.02); }
        50% { transform: translateY(-12px) scale(1.05); }
        100% { transform: translateY(-8px) scale(1.02); }
      }
    `;
    document.head.appendChild(style);
  }

  // Add hover effect to course cards
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Login form validation (if on login page)
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }
      
      // If validation passes, submit the form
      console.log('Form submitted:', { email, password: '***' });
      this.submit();
    });
  }

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add active class to current page nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Search functionality (placeholder)
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
          console.log('Searching for:', searchTerm);
          alert(`Searching for: ${searchTerm}\n\nThis is a demo. Search functionality would be implemented here.`);
        }
      }
    });
  }

  // Add click handlers to CTA buttons
  document.querySelectorAll('.btn').forEach(button => {
    if (!button.type || button.type !== 'submit') {
      button.addEventListener('click', function(e) {
        if (!this.href || this.href === '#') {
          e.preventDefault();
          console.log('Button clicked:', this.textContent);
        }
      });
    }
  });

  // Add loading animation
  window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
});

// Testimonials Carousel Function
function moveCarousel(direction) {
  const carousel = document.getElementById('testimonialsCarousel');
  if (!carousel) return;
  
  const cards = carousel.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
  const maxSlide = totalCards - cardsToShow;
  
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide > maxSlide) {
    currentSlide = maxSlide;
  }
  
  const cardWidth = cards[0].offsetWidth;
  const gap = 32; // 2rem in pixels
  const translateX = -(currentSlide * (cardWidth + gap));
  
  carousel.style.transform = `translateX(${translateX}px)`;
}

// FAQ Toggle Function
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const allFaqItems = document.querySelectorAll('.faq-item');
  
  // Close all other FAQs
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current FAQ
  faqItem.classList.toggle('active');
}

// Password toggle function (for login page)
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');
  
  if (passwordInput && toggleIcon) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
  }
}

// Export for use in inline scripts
if (typeof window !== 'undefined') {
  window.togglePassword = togglePassword;
  window.moveCarousel = moveCarousel;
  window.toggleFaq = toggleFaq;
}


// ========== Particle Animation for Hero Section ==========
class ParticleAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }
  
  init() {
    this.resize();
    this.createParticles();
  }
  
  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
    });
  }
  
  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Get theme color
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? '50, 224, 196' : '13, 115, 119';
    
    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
      this.ctx.fill();
    });
    
    // Draw connections
    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${particleColor}, ${0.15 * (1 - distance / 120)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    });
  }
  
  animate() {
    this.updateParticles();
    this.drawParticles();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  new ParticleAnimation('particleCanvas');
});

// ========== Testimonials Carousel Function ==========
let currentTestimonialIndex = 0;

function moveTestimonialCarousel(direction) {
  const track = document.getElementById('testimonialsCarouselTrack');
  if (!track) return;
  
  const boxes = track.querySelectorAll('.testimonial-box');
  const boxWidth = boxes[0].offsetWidth;
  const gap = 24; // 1.5rem in pixels
  const visibleBoxes = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
  const maxIndex = Math.max(0, boxes.length - visibleBoxes);
  
  currentTestimonialIndex += direction;
  
  // Clamp the index
  if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = 0;
  } else if (currentTestimonialIndex > maxIndex) {
    currentTestimonialIndex = maxIndex;
  }
  
  const translateX = -(currentTestimonialIndex * (boxWidth + gap));
  track.style.transform = `translateX(${translateX}px)`;
  
  // Update button states
  updateTestimonialButtons(currentTestimonialIndex, maxIndex);
}

function updateTestimonialButtons(current, max) {
  const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
  const nextBtn = document.querySelector('.testimonial-nav-btn.next');
  
  if (prevBtn) {
    prevBtn.disabled = current === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = current === max;
  }
}

// Reset carousel on window resize
window.addEventListener('resize', () => {
  currentTestimonialIndex = 0;
  const track = document.getElementById('testimonialsCarouselTrack');
  if (track) {
    track.style.transform = 'translateX(0)';
  }
});

// Export functions
if (typeof window !== 'undefined') {
  window.moveTestimonialCarousel = moveTestimonialCarousel;
}

