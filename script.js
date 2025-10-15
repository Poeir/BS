// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===== Smooth Scroll with Offset =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100; // Height of navbar + extra space
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.about-card, .feature-item, .product-card, .npd-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== Active Nav Link Based on Current Page =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Check if link matches current page
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
        // Check if link matches current page with hash
        else if (linkHref.includes('#') && currentHash) {
            const [page, hash] = linkHref.split('#');
            if ((page === currentPage || page === '') && `#${hash}` === currentHash) {
                link.classList.add('active');
            }
        }
        // Default to home page
        else if (currentPage === 'index.html' && linkHref === 'index.html' && !currentHash) {
            link.classList.add('active');
        }
    });
}

// Set active link on page load
setActiveNavLink();

// Update active link on hash change
window.addEventListener('hashchange', setActiveNavLink);

// ===== Active Nav Link on Scroll (for single page sections) =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) {
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref.includes('#')) {
                link.classList.remove('active');
                if (linkHref === `#${current}` || linkHref.endsWith(`#${current}`)) {
                    link.classList.add('active');
                }
            }
        });
    }
});

// ===== Dropdown Toggle for Mobile =====
function initDropdown() {
    const dropdownParent = document.querySelector('.nav-dropdown');
    if (!dropdownParent) return;
    
    const dropdownToggle = dropdownParent.querySelector('a[href="javascript:void(0)"]');
    const dropdownMenu = dropdownParent.querySelector('.dropdown-menu');
    
    if (dropdownToggle) {
        // Remove any existing listeners
        const newToggle = dropdownToggle.cloneNode(true);
        dropdownToggle.parentNode.replaceChild(newToggle, dropdownToggle);
        
        // Add click listener
        newToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Toggle clicked! Window width:', window.innerWidth);
            
            // Toggle dropdown on mobile
            if (window.innerWidth <= 768) {
                const wasActive = dropdownParent.classList.contains('active');
                dropdownParent.classList.toggle('active');
                const isActive = dropdownParent.classList.contains('active');
                
                console.log('Dropdown state changed:', wasActive, '->', isActive);
                console.log('Dropdown classes:', dropdownParent.className);
                
                // Check menu height
                if (dropdownMenu) {
                    const menuHeight = window.getComputedStyle(dropdownMenu).maxHeight;
                    console.log('Dropdown menu max-height:', menuHeight);
                }
            }
        });
    }
    
    // Close dropdown when clicking a menu item
    if (dropdownMenu) {
        const dropdownLinks = dropdownMenu.querySelectorAll('a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    dropdownParent.classList.remove('active');
                    // Also close the mobile menu
                    navMenu.classList.remove('active');
                    const spans = hamburger.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
}

// Initialize dropdown after DOM is loaded
document.addEventListener('DOMContentLoaded', initDropdown);

// Re-initialize on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const dropdown = document.querySelector('.nav-dropdown');
        if (dropdown && window.innerWidth > 768) {
            dropdown.classList.remove('active');
        }
    }, 250);
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ===== Count Up Animation for Numbers =====
function countUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger count up when element is in view
const numberElements = document.querySelectorAll('.feature-number, .npd-number');
numberElements.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && el.dataset.counted !== 'true') {
                const number = parseInt(el.textContent);
                el.textContent = '0';
                setTimeout(() => {
                    countUp(el, number, 1000);
                }, 200);
                el.dataset.counted = 'true';
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(el);
});

// ===== Card Hover Effect =====
const cards = document.querySelectorAll('.about-card, .product-card, .npd-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--accent-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

    console.log('🌿 BanaWare - Website Loaded Successfully!');