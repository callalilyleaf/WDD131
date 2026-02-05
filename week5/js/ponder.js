// check for phone gallery for in-class note pictures
// setAttribute()

// Get all the star comment elements
// Get the star emoji length by span.innerText
// Use getter to get the length of stars
// Use setter to create aria label dynamically

function updateRatingAria(span) {
    const starNumber = span.innerText.trim().length; // use .trim() method to remove blanks first
    span.setAttribute('role', 'img');                // avoid getting ignored by screenreader
    span.setAttribute('aria-label', `${starNumber} out of 5 stars`)
}

const allRatingElem = document.querySelectorAll('article.movie p span');

allRatingElem.forEach(updateRatingAria)
