// dom-theme.js - WK2b Ponder: Computational Thinking
// Demonstrates: functions, event listeners, and conditionals (if/else if/else)

// ── Computational Thinking ───────────────────────────────────
// Problem: Change the page background image and font style when the user
//          selects a theme from a dropdown.
//
// Steps (pseudocode):
// 1. Get a reference to the <select> element and the <body>
// 2. Listen for the 'change' event on the select
// 3. When the event fires, read the selected value
// 4. Use if/else if/else to decide which theme to apply
// 5. Set body.style.backgroundImage and content font family

// ── Query selectors ──────────────────────────────────────────
const themeSelect = document.querySelector('#theme-select');
const body = document.querySelector('body');
const content = document.querySelector('.content');

// ── Theme definitions ────────────────────────────────────────
// Each theme has a background image path and a font family pairing
const themes = {
    ocean: {
        background: "url('ocean.jpg')",
        fontFamily: 'Papyrus, fantasy',
    },
    forest: {
        background: "url('forest.jpg')",
        fontFamily: 'Impact, Charcoal, sans-serif',
    },
    desert: {
        background: "url('desert.jpg')",
        fontFamily: '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif',
    },
    default: {
        background: 'none',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
};

// ── Function: changeTheme ────────────────────────────────────
// A function is a block of code designed to perform a task when called.
function changeTheme(selectedValue) {
    if (selectedValue === 'ocean') {
        body.style.backgroundImage = themes.ocean.background;
        content.style.fontFamily = themes.ocean.fontFamily;

    } else if (selectedValue === 'forest') {
        body.style.backgroundImage = themes.forest.background;
        content.style.fontFamily = themes.forest.fontFamily;

    } else if (selectedValue === 'desert') {
        body.style.backgroundImage = themes.desert.background;
        content.style.fontFamily = themes.desert.fontFamily;

    } else {
        // Default: reset to original styles
        body.style.backgroundImage = themes.default.background;
        body.style.backgroundColor = '';
        content.style.fontFamily = themes.default.fontFamily;
    }

    console.log('Theme changed to:', selectedValue);
}

// ── Event Listener ───────────────────────────────────────────
// .addEventListener() runs changeTheme whenever the select value changes
themeSelect.addEventListener('change', function (event) {
    const selected = event.target.value;
    changeTheme(selected);
});
