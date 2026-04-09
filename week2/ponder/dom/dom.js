// dom.js - WK2a Ponder: DOM Basics
// Demonstrates core DOM manipulation methods

// ── Select elements ──────────────────────────────────────────
const dropdown = document.querySelector('#webdevlist');      // querySelector
const outputBox = document.getElementById('output');         // getElementById
const outputText = document.querySelector('#output-text');   // querySelector

// Topic detail content
const topicInfo = {
    html: 'HTML (HyperText Markup Language) gives web pages their structure and content. Every visible element on a page is defined by HTML tags.',
    css:  'CSS (Cascading Style Sheets) controls how HTML elements look — colors, fonts, layout, and responsive design all live here.',
    js:   'JavaScript adds interactivity and dynamic behavior. It lets you respond to user actions and update the page without a reload.',
};

// ── Event Listener ───────────────────────────────────────────
dropdown.addEventListener('change', function (event) {
    // .value retrieves the currently selected option value
    const selected = event.target.value;

    // Log to console for testing (open F12 > Console)
    console.log('Selected value:', selected);
    console.log('typeof selected:', typeof selected);

    if (selected === '') {
        // Reset: no selection
        outputText.textContent = 'Select a topic above to see more details.';
        outputBox.classList.remove('highlight');

        // .setAttribute to clear aria-label
        outputBox.setAttribute('aria-label', 'No topic selected');
    } else {
        // .textContent to update displayed text
        outputText.textContent = topicInfo[selected];

        // .classList to add a highlight class
        outputBox.classList.add('highlight');

        // .setAttribute to update an attribute dynamically
        outputBox.setAttribute('aria-label', `Information about ${selected}`);

        // .style to nudge the font size
        outputText.style.fontWeight = 'bold';
    }
});

// ── Console demonstrations of DOM methods ────────────────────
console.log('--- DOM Method Demo (on page load) ---');

// querySelector
const heading = document.querySelector('h1');
console.log('.querySelector h1 textContent:', heading.textContent);

// getElementById
const topics = document.getElementById('topics');
console.log('.getElementById #topics children count:', topics.children.length);

// setAttribute / getAttribute
heading.setAttribute('data-demo', 'wk2a');
console.log('.getAttribute data-demo:', heading.getAttribute('data-demo'));

// className
console.log('dropdown className:', dropdown.className);
