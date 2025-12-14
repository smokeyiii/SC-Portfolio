// ============================================
// SUPAA CLEAN OMAN - INTERACTIVE SCRIPTS
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // ===== SERVICE CARDS STAGGERED ANIMATION =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    // Lazy load images if needed in the future
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // ===== CONSOLE MESSAGE =====
    console.log('%c✨ Supaa Clean Oman', 'font-size: 20px; font-weight: bold; color: #3B82F6;');
    console.log('%cPremium Mobile Detailing Services', 'font-size: 14px; color: #9CA3AF;');
});
