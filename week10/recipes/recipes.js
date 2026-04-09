// recipes.js - WK10 Recipe Book Part 2
// Features: display a random recipe on load, search/filter by name/description/tags, sort by name

const recipes = [
    {
        name: 'Apple Crisp',
        description: 'A simple yet delicious fall dessert with a buttery oat topping, best served warm with vanilla ice cream.',
        tags: ['dessert', 'fall', 'baked', 'easy'],
        image: 'images/apple-crisp.jpg',
        recipeIngredient: ['6 apples', '1 cup oats', '1/2 cup flour', '1/2 cup butter', '1/2 cup brown sugar', '1 tsp cinnamon'],
        recipeInstructions: ['Preheat oven to 375°F.', 'Slice apples and place in baking dish.', 'Mix topping ingredients and crumble over apples.', 'Bake 35-40 minutes until golden.'],
        author: 'RecipeBook',
        cookTime: '40 min',
        prepTime: '15 min',
        recipeYield: '8 servings',
        rating: '⭐⭐⭐⭐',
    },
    {
        name: 'Classic Beef Tacos',
        description: 'Seasoned ground beef tucked into crispy shells with fresh toppings. A crowd-pleasing weeknight dinner.',
        tags: ['dinner', 'mexican', 'quick', 'family'],
        image: 'images/tacos.jpg',
        recipeIngredient: ['1 lb ground beef', 'taco shells', 'taco seasoning', 'lettuce', 'tomato', 'shredded cheese', 'sour cream'],
        recipeInstructions: ['Brown beef in skillet.', 'Add seasoning and water per packet instructions.', 'Simmer 5 minutes.', 'Serve in shells with toppings.'],
        author: 'RecipeBook',
        cookTime: '20 min',
        prepTime: '10 min',
        recipeYield: '4 servings',
        rating: '⭐⭐⭐⭐⭐',
    },
    {
        name: 'Chicken Noodle Soup',
        description: 'Comforting homemade soup loaded with tender chicken, egg noodles, and vegetables in a rich broth.',
        tags: ['soup', 'chicken', 'comfort food', 'winter'],
        image: 'images/chicken-soup.jpg',
        recipeIngredient: ['1 lb chicken breast', '3 carrots', '3 celery stalks', '1 onion', '8 oz egg noodles', '6 cups chicken broth', 'salt', 'pepper'],
        recipeInstructions: ['Simmer chicken in broth 20 minutes.', 'Remove chicken and shred.', 'Add vegetables and cook 10 minutes.', 'Add noodles and chicken, cook 8 minutes.'],
        author: 'RecipeBook',
        cookTime: '40 min',
        prepTime: '15 min',
        recipeYield: '6 servings',
        rating: '⭐⭐⭐⭐⭐',
    },
    {
        name: 'Banana Bread',
        description: 'Moist and tender banana bread made with ripe bananas. Perfect for breakfast or an afternoon snack.',
        tags: ['breakfast', 'baked', 'snack', 'easy'],
        image: 'images/banana-bread.jpg',
        recipeIngredient: ['3 ripe bananas', '1/3 cup melted butter', '3/4 cup sugar', '1 egg', '1 tsp vanilla', '1 tsp baking soda', '1.5 cups flour'],
        recipeInstructions: ['Preheat oven to 350°F.', 'Mash bananas and mix with butter.', 'Stir in sugar, egg, vanilla, and baking soda.', 'Fold in flour and bake 60 minutes.'],
        author: 'RecipeBook',
        cookTime: '60 min',
        prepTime: '10 min',
        recipeYield: '1 loaf',
        rating: '⭐⭐⭐⭐',
    },
    {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with classic Caesar dressing, crunchy croutons, and shaved Parmesan cheese.',
        tags: ['salad', 'lunch', 'vegetarian', 'quick'],
        image: 'images/caesar-salad.jpg',
        recipeIngredient: ['1 head romaine', '1/2 cup Caesar dressing', '1 cup croutons', '1/4 cup Parmesan', 'black pepper'],
        recipeInstructions: ['Chop romaine and place in large bowl.', 'Toss with Caesar dressing.', 'Top with croutons and Parmesan.', 'Season with black pepper.'],
        author: 'RecipeBook',
        cookTime: '0 min',
        prepTime: '10 min',
        recipeYield: '4 servings',
        rating: '⭐⭐⭐⭐',
    },
    {
        name: 'Chocolate Chip Cookies',
        description: 'Chewy, golden-edged cookies packed with chocolate chips. A classic treat loved by all ages.',
        tags: ['dessert', 'baked', 'cookies', 'easy'],
        image: 'images/chocolate-chip-cookies.jpg',
        recipeIngredient: ['2.25 cups flour', '1 cup butter', '3/4 cup sugar', '3/4 cup brown sugar', '2 eggs', '2 tsp vanilla', '1 tsp baking soda', '2 cups chocolate chips'],
        recipeInstructions: ['Preheat oven to 375°F.', 'Cream butter and sugars.', 'Beat in eggs and vanilla.', 'Mix in flour and baking soda.', 'Fold in chips and bake 9-11 minutes.'],
        author: 'RecipeBook',
        cookTime: '11 min',
        prepTime: '20 min',
        recipeYield: '48 cookies',
        rating: '⭐⭐⭐⭐⭐',
    },
    {
        name: 'Spaghetti Marinara',
        description: 'Classic Italian pasta with a rich, herb-infused tomato sauce. Simple ingredients, big flavor.',
        tags: ['dinner', 'italian', 'pasta', 'vegetarian'],
        image: 'images/spaghetti.jpg',
        recipeIngredient: ['1 lb spaghetti', '28 oz crushed tomatoes', '4 garlic cloves', '2 tbsp olive oil', 'fresh basil', 'salt', 'pepper'],
        recipeInstructions: ['Cook spaghetti per package directions.', 'Sauté garlic in olive oil.', 'Add crushed tomatoes and simmer 20 minutes.', 'Season and toss with pasta.'],
        author: 'RecipeBook',
        cookTime: '25 min',
        prepTime: '10 min',
        recipeYield: '4 servings',
        rating: '⭐⭐⭐⭐',
    },
    {
        name: 'Pancakes',
        description: 'Light and fluffy breakfast pancakes ready in 20 minutes. Serve with maple syrup and fresh berries.',
        tags: ['breakfast', 'quick', 'easy', 'family'],
        image: 'images/pancakes.jpg',
        recipeIngredient: ['1.5 cups flour', '2 tbsp sugar', '2 tsp baking powder', '1/2 tsp salt', '1.25 cups milk', '1 egg', '3 tbsp melted butter'],
        recipeInstructions: ['Mix dry ingredients.', 'Whisk wet ingredients separately.', 'Combine until just mixed (lumps ok).', 'Cook on greased griddle over medium heat.'],
        author: 'RecipeBook',
        cookTime: '15 min',
        prepTime: '5 min',
        recipeYield: '8 pancakes',
        rating: '⭐⭐⭐⭐⭐',
    },
    {
        name: 'Guacamole',
        description: 'Fresh and creamy guacamole with ripe avocados, lime juice, cilantro, and a kick of jalapeño.',
        tags: ['snack', 'mexican', 'dip', 'quick', 'vegetarian'],
        image: 'images/guacamole.jpg',
        recipeIngredient: ['3 ripe avocados', '1 lime (juiced)', '1/2 tsp salt', '1/2 cup cilantro', '1/2 onion (diced)', '1 jalapeño (minced)', '2 roma tomatoes (diced)'],
        recipeInstructions: ['Mash avocados in a bowl.', 'Stir in lime juice and salt.', 'Fold in onion, cilantro, jalapeño, and tomato.', 'Taste and adjust seasoning.'],
        author: 'RecipeBook',
        cookTime: '0 min',
        prepTime: '10 min',
        recipeYield: '6 servings',
        rating: '⭐⭐⭐⭐⭐',
    },
];

// ── Utilities ──

function getRandomRecipe() {
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index];
}

function buildRecipeCard(recipe) {
    return `
        <div>
            <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-text">
                <button>${recipe.tags[0]}</button>
                <h2 class="recipe-name">${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating.length / 2} out of 5 stars">
                    <span aria-hidden="true">${recipe.rating}</span>
                </span>
                <article class="recipe-description">${recipe.description}</article>
                <p><strong>Prep:</strong> ${recipe.prepTime} &nbsp;|&nbsp; <strong>Cook:</strong> ${recipe.cookTime} &nbsp;|&nbsp; <strong>Yield:</strong> ${recipe.recipeYield}</p>
            </div>
        </div>
    `;
}

// ── Display Random Recipe ──

function displayRandomRecipe() {
    const card = document.querySelector('#random-card');
    const recipe = getRandomRecipe();
    card.innerHTML = buildRecipeCard(recipe);
}

// ── Search & Filter ──

function searchRecipes(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return recipes
        .filter(recipe => {
            const inName = recipe.name.toLowerCase().includes(q);
            const inDesc = recipe.description.toLowerCase().includes(q);
            const inTags = recipe.tags.some(tag => tag.toLowerCase().includes(q));
            return inName || inDesc || inTags;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
}

function displayResults(matches) {
    const section = document.querySelector('#results-section');
    const list = document.querySelector('#results-list');

    if (matches.length === 0) {
        list.innerHTML = '<p>No recipes found. Try a different search term.</p>';
    } else {
        list.innerHTML = matches.map(recipe => `
            <div class="recipe-card">
                ${buildRecipeCard(recipe)}
            </div>
        `).join('');
    }

    section.hidden = false;
}

// ── Event Listeners ──

document.querySelector('#searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.querySelector('#recipe-name').value;
    const results = searchRecipes(query);
    displayResults(results);
});

// ── Init ──
displayRandomRecipe();
