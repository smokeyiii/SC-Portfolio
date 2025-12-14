class AppNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar" id="navbar">
                <div class="nav-container">
                    <a href="index.html">
                        <img src="assets/images/logo-emblem.png" alt="Supaa Clean Oman" class="logo">
                    </a>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="why-us.html">Why Us</a></li>
                        <li><a href="process.html">Process</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
                </div>
            </nav>
        `;

        this.highlightActiveLink();
        this.initMobileMenu();
        this.initScrollEffect();
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-links a');

        links.forEach(link => {
            // Simple check: if href matches current path (basic)
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');
                link.style.color = 'var(--color-accent)';
            }
        });
    }

    initScrollEffect() {
        const navbar = this.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                } else {
                    navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            });
        }
    }

    initMobileMenu() {
        const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
        const navLinks = this.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function () {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                });
            });
        }
    }
}

customElements.define('app-navbar', AppNavbar);
