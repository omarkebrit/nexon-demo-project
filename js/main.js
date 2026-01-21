// Translations Data
const translations = {
    en: {
        logo_text: "Omar Kebrit",
        nav_products: "Products",
        nav_features: "Services",
        nav_pricing: "Pricing",
        nav_login: "Access Demo",
        hero_badge: "New: AI Workflow Engine",
        hero_title_1: "Crafting Digital",
        hero_title_2: "Masterpieces.",
        hero_subtitle: "High-performance SaaS architecture designed for scalability and elegance. Built by Omar Kebrit.",
        btn_explore: "Explore Projects",
        btn_demo: "Live Demo",
        signature: "Des. by Omar Kebrit",
        stat_code: "Clean Code",

        // Products
        products_title: "Curated Products",
        products_subtitle: "A collection of high-impact SaaS tools ready for deployment.",
        btn_view_details: "View Details",
        prod_desc_1: "Automated financial forecasting with machine learning precision.",
        prod_desc_2: "Manage customer relationships with zero friction.",
        prod_desc_3: "Real-time data visualization for complex datasets.",

        // Modal
        modal_title: "Start Your Engine",
        modal_subtitle: "Get instant access to the Omar Kebrit demo environment.",
        modal_btn: "Access Now",

        testimonials_title: "Client Feedback",
        testimonials_subtitle: "Stories from partners who scaled with us.",
        footer_rights: "© 2026 Omar Kebrit. All rights reserved."
    },
    ar: {
        logo_text: "عمر كبريت",
        nav_products: "المنتجات",
        nav_features: "الخدمات",
        nav_pricing: "الأسعار",
        nav_login: "تجربة ديمو",
        hero_badge: "جديد: محرك الذكاء الاصطناعي",
        hero_title_1: "نصنع المستقبل",
        hero_title_2: "بلمسة إبداعية.",
        hero_subtitle: "بنية برمجية فائقة الأداء مصممة للتوسع والأناقة. طُورت بواسطة عمر كبريت.",
        btn_explore: "تصفح المشاريع",
        btn_demo: "عرض حي",
        signature: "تصميم: عمر كبريت",
        stat_code: "كود نظيف",

        // Products
        products_title: "منتجات مختارة",
        products_subtitle: "مجموعة من أدوات SaaS عالية التأثير جاهزة للنشر.",
        btn_view_details: "التفاصيل",
        prod_desc_1: "توقعات مالية آلية بدقة تعلم الآلة.",
        prod_desc_2: "إدارة علاقات العملاء بدون أي تعقيدات.",
        prod_desc_3: "تصور بيانات فوري لمجموعات البيانات المعقدة.",

        // Modal
        modal_title: "ابدأ محركك",
        modal_subtitle: "احصل على وصول فوري لبيئة الديمو الخاصة بعمر كبريت.",
        modal_btn: "ابدأ الآن",

        testimonials_title: "آراء العملاء",
        testimonials_subtitle: "قصص نجاح من شركاء توسعوا معنا.",
        footer_rights: "© 2026 عمر كبريت. جميع الحقوق محفوظة."
    }
};

// Language Management
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const isRTL = lang === 'ar';

    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update Toggle Button Text
    const toggleText = document.querySelector('.lang-text');
    if (toggleText) {
        toggleText.textContent = isRTL ? 'English' : 'العربية';
    }

    // GSAP Direction Update (if needed)
    localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);

    // Language Toggle Listener
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // Initialize ALL Features
    initAnimations();
    initModal();
    initFingerprint();

    // Mobile Menu Logic
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) icon.classList.replace('ph-list', 'ph-x');
            else icon.classList.replace('ph-x', 'ph-list');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
            });
        });
    }
});

// Modal Logic
function initModal() {
    const modal = document.getElementById('demo-modal');
    const openBtns = document.querySelectorAll('a[href="#demo-modal"]');
    const closeBtn = document.querySelector('.modal-close');

    if (modal) {
        const openModal = (e) => {
            e.preventDefault();
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        };

        const closeModal = () => {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        };

        openBtns.forEach(btn => btn.addEventListener('click', openModal));
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.opacity === '1') closeModal();
        });
    }
}

// The "Fingerprint" - Custom Cursor & Console Signature
function initFingerprint() {
    // Console Signature
    console.log(
        "%c Developed by Omar Kebrit %c \nDigital Architect & SaaS Specialist",
        "background: #6366f1; color: white; padding: 6px; border-radius: 4px; font-weight: bold;",
        "color: #a855f7; font-weight: bold;"
    );

    // Custom Cursor (Desktop Only)
    if (window.matchMedia("(min-width: 992px)").matches) {
        // Remove existing if any (hmr safety)
        const oldCursor = document.querySelector('.custom-cursor');
        if (oldCursor) oldCursor.remove();
        const oldDot = document.querySelector('.cursor-dot');
        if (oldDot) oldDot.remove();

        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.classList.add('cursor-dot');
        document.body.appendChild(cursorDot);

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "none"
            });
        });

        // Hover Effects
        const interactables = document.querySelectorAll('a, button, .product-card, .glass-card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 1.5, borderColor: 'var(--accent)', duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, borderColor: 'var(--primary)', duration: 0.3 });
            });
        });
    }
}

// GSAP Animations Setup
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Stagger
    gsap.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Hero Visual Tilt 3D
    const card = document.querySelector('.gsap-tilt');
    if (card) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            gsap.to(card, {
                rotationY: xAxis,
                rotationX: yAxis,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    // Standard Fade Up for Sections
    gsap.utils.toArray('.animate-fade-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}
