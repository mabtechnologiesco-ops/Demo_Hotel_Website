// Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // IntersectionObserver for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .fade-left, .fade-right, .scale-in').forEach(el => {
      observer.observe(el);
    });

    // Stagger animation for grid items
    document.querySelectorAll('.services-grid .service-card, .staff-grid .staff-card, .rooms-grid .room-card, .packages-grid .package-card, .testimonials-grid .testimonial-card, .blog-grid .blog-card, .gallery-grid .gallery-item').forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
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

    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
      this.reset();
    });

    // Counter animation for stats
    const animateCounters = () => {
      document.querySelectorAll('.stat-number').forEach(counter => {
        const text = counter.textContent;
        const num = parseInt(text);
        const suffix = text.replace(/[0-9]/g, '');
        let current = 0;
        const increment = num / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            counter.textContent = text;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + suffix;
          }
        }, 30);
      });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-bar');
    if (statsSection) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      statsObserver.observe(statsSection);
    }