// mission.js - WK2 Dark/Light Theme Switcher

const themeSelect = document.querySelector('#themeSelect');
const logo = document.querySelector('#byui-logo');

const LOGO_BLUE = 'https://wddbyui.github.io/wdd131/images/byui-logo.webp';
const LOGO_WHITE = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';

function applyTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        logo.src = LOGO_WHITE;
        logo.alt = 'BYU-Idaho Logo (white)';
    } else if (mode === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        logo.src = LOGO_BLUE;
        logo.alt = 'BYU-Idaho Logo';
    }
}

themeSelect.addEventListener('change', function (event) {
    const selectedMode = event.target.value;
    applyTheme(selectedMode);
});
