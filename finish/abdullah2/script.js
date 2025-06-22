
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Element selections
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-links');
    const backToTopBtn = document.querySelector('.back-to-top');
    const sections = document.querySelectorAll('section');
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    const staggerItems = document.querySelectorAll('.stagger-item');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const freelancerTitle = document.querySelector('.freelancer-title');
    const profileName = document.querySelector('.profile-info h1');
    const profileDesc = document.querySelector('.profile-info p');
    
    // Animation on page load
    setTimeout(() => {
        freelancerTitle.classList.add('animate');
        
        setTimeout(() => {
            profileName.classList.add('animate');
            
            setTimeout(() => {
                profileDesc.classList.add('animate');
            }, 300);
        }, 500);
    }, 300);
    
    // Navbar toggle for mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            navMenu.classList.remove('open');
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Testimonial slider
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.testimonial').length;
    
    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        
        const offset = currentSlide * -100;
        testimonialsContainer.style.transform = `translateX(${offset}%)`;
        
        // Update active dot
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Initialize testimonial dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide testimonials
    let testimonialInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Reset interval on manual navigation
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        });
    });
    
    // Portfolio filter functionality
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Update active category
            portfolioCategories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');
            
            const filter = category.textContent.toLowerCase();
            
            // Filter logic would go here if we had actual category data
            // For now, we'll just animate all items since we don't have real filtering data
            portfolioItems.forEach(item => {
                item.classList.remove('reveal-left', 'reveal-right', 'reveal-up');
                void item.offsetWidth; // Trigger reflow
                
                // Randomly assign animation direction
                const animations = ['reveal-left', 'reveal-right', 'reveal-up'];
                const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                item.classList.add(randomAnimation);
                
                setTimeout(() => {
                    item.classList.add('reveal-visible');
                }, 100);
            });
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Sticky navbar effect
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
            backToTopBtn.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && sectionId) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Reveal animations on scroll
        revealElements.forEach(element => {
            if (isElementInViewport(element, 0.3)) {
                element.classList.add('reveal-visible');
            }
        });
        
        // Stagger animations for service cards
        staggerItems.forEach((item, index) => {
            if (isElementInViewport(item, 0.3)) {
                setTimeout(() => {
                    item.style.animation = `fadeIn 0.8s ease forwards`;
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
        
        // Add visible class to sections for fade-in effect
        sections.forEach(section => {
            if (isElementInViewport(section, 0.2)) {
                section.classList.add('visible');
            }
        });
    });
    
    // Trigger scroll event once on load to initialize states
    window.dispatchEvent(new Event('scroll'));
    
    // Back to top button functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form handling
    
    const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const formMessage = contactForm.querySelector('.form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            showFormMessage('⚠️ Please fill in all required fields.', 'error');
            return;
        }

        if (!emailRegex.test(email)) {
            showFormMessage('⚠️ Please enter a valid email address.', 'error');
            return;
        }

        // Simulate successful submission
        showFormMessage('✅ Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.style.padding = '10px 15px';
        formMessage.style.marginBottom = '20px';
        formMessage.style.borderRadius = '8px';
        formMessage.style.fontWeight = '600';
        formMessage.style.transition = 'all 0.4s ease';

        if (type === 'success') {
            formMessage.style.background = '#e7f3ff';
            formMessage.style.color = '#3b7edd';
            formMessage.style.boxShadow = '0 0 10px rgba(59, 126, 221, 0.1)';
        } else {
            formMessage.style.background = '#ffe6e6';
            formMessage.style.color = '#d8000c';
            formMessage.style.boxShadow = '0 0 10px rgba(216, 0, 12, 0.1)';
        }

        // Auto-hide after 5s
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.style.background = 'transparent';
            formMessage.style.boxShadow = 'none';
        }, 5000);
    }
}

    
    // Helper function to check if element is in viewport
    function isElementInViewport(el, threshold = 0) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.top <= windowHeight * (1 - threshold) &&
            rect.bottom >= windowHeight * threshold
        );
    }
    
    // Add hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 20px 40px rgba(59, 126, 221, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Implement typing effect manually as backup
    function typeWriterEffect() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement) return;
        
        const text = "I craft modern, responsive websites and applications that drive results.";
        let i = 0;
        typewriterElement.textContent = '';
        
        function type() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1500);
    }
    
    // Only run the typing effect if the CSS animation is not working
    setTimeout(() => {
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement && typewriterElement.textContent === '') {
            typeWriterEffect();
        }
    }, 3000);
    
    // Handle profile picture animation
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('click', function() {
        this.style.animation = 'none';
        void this.offsetWidth; // Trigger reflow
        this.style.animation = 'morphProfile 8s linear infinite alternate';
    });
});
