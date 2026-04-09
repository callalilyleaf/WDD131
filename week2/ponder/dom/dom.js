// dom.js - WK2a Ponder: DOM Basics
// Demonstrates core DOM manipulation methods

let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function() {
    let codeValue = selectElem.value;
    console.log(codeValue);
});
