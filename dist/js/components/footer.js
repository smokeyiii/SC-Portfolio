class AppFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <img src="assets/images/logo-emblem.png" alt="Supaa Clean Oman" class="footer-logo">

                        <ul class="social-links">
                            <li><a href="https://www.instagram.com/supaaclean.om/" aria-label="Instagram" target="_blank">📷</a>
                            </li>
                            <li><a href="#" aria-label="Facebook">👥</a></li>
                            <li><a href="https://wa.me/96899324529" aria-label="WhatsApp" target="_blank">💬</a></li>
                        </ul>

                        <p class="copyright">&copy; 2025 Supaa Clean Oman. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;

        this.initScrollToTop();
    }

    initScrollToTop() {
        const logo = this.querySelector('.footer-logo');
        if (logo) {
            logo.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            logo.style.cursor = 'pointer';
        }
    }
}

customElements.define('app-footer', AppFooter);
