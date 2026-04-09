// blog.js - WK6 Build a Blog Part 2
// Renders book articles dynamically from a data array

const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'January 15, 2024',
        description: `On the night he is born, Septimus Heap—the seventh son of the seventh son—is
            pronounced dead and swept away. That same night his father discovers an abandoned
            child in the snow. This girl is destined for great things, but so is Septimus.
            A thrilling adventure full of magic and mystery.`,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Septimus Heap Book One: Magyk cover',
        ages: '9–12',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐',
    },
    {
        id: 2,
        title: 'The Hobbit',
        date: 'February 10, 2024',
        description: `Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life.
            His contentment is disturbed when the wizard Gandalf and a company of thirteen
            dwarves arrive on his doorstep one day to whisk him away on an adventure.
            A timeless classic for all ages.`,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
        imgAlt: 'The Hobbit book cover',
        ages: '10+',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐',
    },
    {
        id: 3,
        title: "Ender's Game",
        date: 'March 5, 2024',
        description: `Andrew "Ender" Wiggin is humanity's last hope. Recruited to attend a
            military school in outer space, Ender shows brilliance in tactical simulations.
            But the line between training and reality blurs in this thought-provoking
            science fiction masterpiece.`,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg',
        imgAlt: "Ender's Game book cover",
        ages: '12+',
        genre: 'Science Fiction',
        stars: '⭐⭐⭐⭐⭐',
    },
];

function createBookCard(article) {
    return `
        <article class="book-card">
            <div class="book-cover">
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
            </div>
            <div class="book-info">
                <div>
                    <span class="badge">${article.genre}</span>
                    <span class="badge">Ages ${article.ages}</span>
                </div>
                <h2>${article.title}</h2>
                <p class="meta">Posted: ${article.date}</p>
                <div class="rating" role="img" aria-label="Rating: ${article.stars.length} out of 5 stars">
                    <span aria-hidden="true">${article.stars}</span>
                </div>
                <p class="description">${article.description.trim()}</p>
                <a class="read-more" href="#">Read Review &rarr;</a>
            </div>
        </article>
    `;
}

function renderArticles() {
    const postsSection = document.querySelector('#posts');
    const html = articles.map(createBookCard).join('');
    postsSection.innerHTML = html;
}

renderArticles();
