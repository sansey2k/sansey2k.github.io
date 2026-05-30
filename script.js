const translations = {
    en: {
        welcome: "Welcome to my personal page",
        description: "Here you can find my contact information",
        contacts: "Contacts",
        phone: "Phone:",
        email: "Email:"
    },
    ru: {
        welcome: "Добро пожаловать на мою личную страницу",
        description: "Здесь вы можете найти мои контактные данные",
        contacts: "Контакты",
        phone: "Телефон:",
        email: "Электронная почта:"
    },
    pl: {
        welcome: "Witam na mojej stronie osobistej",
        description: "Tutaj znajdziesz moje dane kontaktowe",
        contacts: "Kontakt",
        phone: "Telefon:",
        email: "E-mail:"
    },
    de: {
        welcome: "Willkommen auf meiner persönlichen Seite",
        description: "Hier finden Sie meine Kontaktinformationen",
        contacts: "Kontakte",
        phone: "Telefon:",
        email: "E-Mail:"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

const savedLang = localStorage.getItem('preferredLanguage') || 'en';
setLanguage(savedLang);