// script.js

// ===== ПЕРЕВОДЫ =====
const translations = {
    ru: {
        // Навигация
        home: "Главная",
        services: "Услуги",
        calculator: "Калькулятор",
        contact: "Контакты",
        // Главная
        hero_title: "Облачные решения для вашего бизнеса",
        hero_subtitle: "S3-хранилища, резервное копирование и аварийное восстановление в Беларуси",
        hero_btn_calc: "Рассчитать стоимость",
        hero_btn_services: "Все услуги",
        services_title: "Наши услуги",
        services_desc: "Современные облачные решения для любого бизнеса",
        service_s3: "S3-хранилище",
        service_s3_desc: "Масштабируемое объектное хранилище",
        service_baas: "BaaS",
        service_baas_desc: "Резервное копирование",
        service_draas: "DRaaS",
        service_draas_desc: "Аварийное восстановление",
        service_iaas: "IaaS",
        service_iaas_desc: "Виртуальная инфраструктура",
        more: "Подробнее",
        // Страница услуг
        services_page_title: "Наши услуги",
        services_page_desc: "Мы предлагаем полный спектр облачных решений для вашего бизнеса",
        service_s3_desc_full: "Масштабируемое объектное хранилище для любых типов данных. Идеально подходит для хранения контента сайтов, резервных копий, логов и аналитических данных. Полная совместимость с Amazon S3 API.",
        s3_feat1: "✓ Безлимитное масштабирование",
        s3_feat2: "✓ Надёжность 99.99%",
        s3_feat3: "✓ Интеграция с CDN",
        service_baas_desc_full: "Автоматическое резервное копирование ваших данных с гибкими настройками расписания и глубины хранения. Защита от вирусов-шифровальщиков.",
        baas_feat1: "✓ Резервное копирование 24/7",
        baas_feat2: "✓ Мгновенное восстановление",
        baas_feat3: "✓ Хранение в нескольких ЦОД",
        service_draas_desc_full: "Аварийное восстановление критически важных систем. Гарантированное время восстановления (RTO) и точка восстановления (RPO) в соответствии с вашими потребностями.",
        draas_feat1: "✓ RTO от 15 минут",
        draas_feat2: "✓ Регулярное тестирование",
        draas_feat3: "✓ Автоматическое переключение",
        service_iaas_desc_full: "Аренда виртуальных серверов с предустановленным ПО или вашими образами. Гибкая конфигурация CPU, RAM, дисков.",
        iaas_feat1: "✓ Выделенные ресурсы",
        iaas_feat2: "✓ Масштабирование за минуты",
        iaas_feat3: "✓ Защита DDoS",
        // Калькулятор
        calc_page_title: "Калькулятор стоимости",
        calc_page_desc: "Рассчитайте предварительную стоимость услуг CloudLine",
        calc_service: "Выберите услугу:",
        calc_s3: "S3-хранилище",
        calc_baas: "BaaS",
        calc_draas: "DRaaS",
        calc_iaas: "IaaS",
        calc_storage: "Объём (ГБ):",
        calc_months: "Срок (мес):",
        calc_btn: "Рассчитать",
        calc_result: "Итого:",
        calc_info_title: "Как рассчитывается стоимость?",
        calc_info_text: "Цены указаны в белорусских рублях и включают НДС. При заказе от 3 месяцев предоставляется скидка 5%, от 6 месяцев – 10%, от 12 месяцев – 15%. Окончательная стоимость зависит от выбранной услуги, объёма хранилища и срока. Для индивидуальных условий свяжитесь с нами.",
        // Контакты
        contact_page_title: "Контакты",
        contact_page_desc: "Свяжитесь с нами любым удобным способом",
        contact_address: "Адрес",
        contact_address_val: "Минск, ул. Мележа, 5",
        contact_phone: "Телефон",
        contact_email: "Email",
        contact_name: "Имя",
        contact_message: "Сообщение",
        contact_send: "Отправить",
        // Подвал
        footer_about: "Надёжные облачные решения для бизнеса",
        footer_services: "Услуги",
        footer_s3: "S3",
        footer_baas: "BaaS",
        footer_draas: "DRaaS",
        footer_iaas: "IaaS",
        footer_contacts: "Контакты",
        // Уведомления
        success_msg: "Сообщение отправлено!",
        error_msg: "Ошибка отправки. Попробуйте позже.",
        required_field: "Заполните все поля",
        in_development: "Раздел в разработке"
    },
    en: {
        home: "Home",
        services: "Services",
        calculator: "Calculator",
        contact: "Contact",
        hero_title: "Cloud solutions for your business",
        hero_subtitle: "S3 storage, backup, and disaster recovery in Belarus",
        hero_btn_calc: "Calculate cost",
        hero_btn_services: "All services",
        services_title: "Our services",
        services_desc: "Modern cloud solutions for any business",
        service_s3: "S3 storage",
        service_s3_desc: "Scalable object storage",
        service_baas: "BaaS",
        service_baas_desc: "Backup as a service",
        service_draas: "DRaaS",
        service_draas_desc: "Disaster recovery",
        service_iaas: "IaaS",
        service_iaas_desc: "Virtual infrastructure",
        more: "Learn more",
        services_page_title: "Our services",
        services_page_desc: "We offer a full range of cloud solutions for your business",
        service_s3_desc_full: "Scalable object storage for any data type. Ideal for website content, backups, logs, and analytics. Fully compatible with Amazon S3 API.",
        s3_feat1: "✓ Unlimited scaling",
        s3_feat2: "✓ 99.99% reliability",
        s3_feat3: "✓ CDN integration",
        service_baas_desc_full: "Automatic data backup with flexible schedule and retention settings. Protection against ransomware.",
        baas_feat1: "✓ 24/7 backup",
        baas_feat2: "✓ Instant recovery",
        baas_feat3: "✓ Multi-datacenter storage",
        service_draas_desc_full: "Disaster recovery for critical systems. Guaranteed RTO and RPO according to your needs.",
        draas_feat1: "✓ RTO from 15 minutes",
        draas_feat2: "✓ Regular testing",
        draas_feat3: "✓ Automatic failover",
        service_iaas_desc_full: "Virtual servers with preinstalled software or your own images. Flexible CPU, RAM, storage configuration.",
        iaas_feat1: "✓ Dedicated resources",
        iaas_feat2: "✓ Scale in minutes",
        iaas_feat3: "✓ DDoS protection",
        calc_page_title: "Cost calculator",
        calc_page_desc: "Estimate the cost of CloudLine services",
        calc_service: "Choose service:",
        calc_s3: "S3 storage",
        calc_baas: "BaaS",
        calc_draas: "DRaaS",
        calc_iaas: "IaaS",
        calc_storage: "Volume (GB):",
        calc_months: "Term (months):",
        calc_btn: "Calculate",
        calc_result: "Total:",
        calc_info_title: "How is the cost calculated?",
        calc_info_text: "Prices are in Belarusian rubles including VAT. Discounts: 5% for 3+ months, 10% for 6+ months, 15% for 12+ months. The final cost depends on the selected service, storage volume, and term. For custom conditions, contact us.",
        contact_page_title: "Contacts",
        contact_page_desc: "Contact us in any convenient way",
        contact_address: "Address",
        contact_address_val: "Minsk, Melezha str., 5",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_name: "Name",
        contact_message: "Message",
        contact_send: "Send",
        footer_about: "Reliable cloud solutions for business",
        footer_services: "Services",
        footer_s3: "S3",
        footer_baas: "BaaS",
        footer_draas: "DRaaS",
        footer_iaas: "IaaS",
        footer_contacts: "Contacts",
        success_msg: "Message sent!",
        error_msg: "Send error. Try again later.",
        required_field: "Please fill all fields",
        in_development: "Section under construction"
    }
};

let currentLang = 'ru';

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification__close">&times;</button>
    `;
    container.appendChild(notification);

    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => notification.remove());

    setTimeout(() => {
        if (notification.parentNode) notification.remove();
    }, 5000);
}

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
function switchLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Сохраняем текущее значение калькулятора
    const totalSpan = document.getElementById('totalPrice');
    const currentTotal = totalSpan ? totalSpan.textContent : '0';

    // Обновляем все элементы с data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.type !== 'submit' && el.type !== 'button') {
                    el.placeholder = translations[lang][key];
                }
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                // Для обычных элементов меняем текст, но сохраняем вложенный span если есть
                const span = el.querySelector('span');
                if (span && el.id !== 'calcResult') {
                    // Если есть вложенный span и это не результат калькулятора
                    const spanText = span.textContent;
                    el.childNodes.forEach(node => {
                        if (node.nodeType === 3) { // текстовый узел
                            node.textContent = translations[lang][key];
                        }
                    });
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    // Восстанавливаем значение калькулятора
    if (totalSpan) {
        totalSpan.textContent = currentTotal;
    }

    // Кнопки языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.classList.contains(`lang-btn--${lang}`));
    });

    localStorage.setItem('preferredLanguage', lang);
}

// ===== КАЛЬКУЛЯТОР СО СКИДКОЙ =====
function calculatePrice() {
    const serviceSelect = document.getElementById('serviceType');
    const storageInput = document.getElementById('storage');
    const monthsInput = document.getElementById('months');
    const totalSpan = document.getElementById('totalPrice');

    if (!serviceSelect || !storageInput || !monthsInput || !totalSpan) {
        console.warn('Калькулятор: элементы не найдены');
        return;
    }

    const service = serviceSelect.value;
    const storage = parseFloat(storageInput.value) || 0;
    const months = parseInt(monthsInput.value, 10) || 1;

    // Базовые цены за ГБ в месяц (BYN)
    const prices = {
        s3: 0.15,
        baas: 0.25,
        draas: 0.40,
        iaas: 0.30
    };

    const pricePerGB = prices[service] || 0.15;

    // Расчёт скидки в зависимости от количества месяцев
    let discount = 0;
    if (months >= 12) {
        discount = 0.15; // 15%
    } else if (months >= 6) {
        discount = 0.10; // 10%
    } else if (months >= 3) {
        discount = 0.05; // 5%
    }

    const totalWithoutDiscount = pricePerGB * storage * months;
    const total = totalWithoutDiscount * (1 - discount);

    // Устанавливаем значение
    totalSpan.textContent = total.toFixed(2);
}

// ===== ОТПРАВКА ФОРМЫ =====
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
        showNotification(translations[currentLang].required_field, 'error');
        return;
    }

    showNotification(translations[currentLang].success_msg, 'success');
    e.target.reset();
}

// ===== БУРГЕР-МЕНЮ =====
function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
}

// ===== КНОПКА "НАВЕРХ" =====
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== АКТИВНЫЙ ПУНКТ МЕНЮ =====
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === currentPage);
    });
}

// ===== ЗАГЛУШКА ДЛЯ ССЫЛОК В РАЗРАБОТКЕ =====
function initDummyLinks() {
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(translations[currentLang].in_development, 'info');
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    // Язык
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
    switchLanguage(savedLang);

    // Кнопки языков
    document.querySelectorAll('.lang-btn--ru, .lang-btn--en').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.classList.contains('lang-btn--ru') ? 'ru' : 'en';
            switchLanguage(lang);
        });
    });

    // Калькулятор
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculatePrice);
        // Вызываем сразу после загрузки
        setTimeout(calculatePrice, 50);
    }

    // Форма обратной связи
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Бургер
    initBurger();

    // Кнопка "Наверх"
    initScrollTop();

    // Активное меню
    setActiveNav();

    // Заглушки для пустых ссылок
    initDummyLinks();
});