// ideas: create a pixel looking character
// methods: 
//      attack: add some red blooding animation
//      level up: green animation & sound

const monster = {
    name: "Pixel Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    takeDamage() {
        this.health = Math.max(0, this.health-20);
    },
    levelUp() {
        this.level++;
    }
};

function renderMonster() {
    document.getElementById("monsterName").textContent = monster.name;
    document.getElementById("monsterClass").textContent = `Class: ${monster.class}`;
    document.getElementById("monsterLevel").textContent = `Level: ${monster.level}`;
    document.getElementById("monsterHealth").textContent = `Health Points: ${monster.health}`;
}

const attackedBtn = document.getElementById("attacked");
const levelUpBtn = document.getElementById("levelUp");

attackedBtn.addEventListener("click", () => {
     monster.takeDamage();
     renderMonster();
});  // No () here

levelUpBtn.addEventListener("click", monster.levelUp)

renderMonster();

