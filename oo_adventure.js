// Part 1
const adventurer = {
    name: "Loof",
    health: 30,
    inventory: ["bat", "elixer", "boost"],
    companion: {
        name: "Diggy",
        type: "Dog",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20 + 1 + mod);
        console.log(`${this.name} rolled a ${result}`)
    }
}

console.log(`Inventory:`)
for (let item in adventurer.inventory) {
    console.log(`${adventurer.inventory[item]}`)
}

// Part 2
class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20 + 1 + mod);
        console.log(`${this.name} rolled a ${result}`)
    }
}

// const loof = new Character("Loof");
// loof.inventory = ["elixer", "boost"];
// loof.weapon = ["bat"]
// loof.companion = new Character("Diggy");
// loof.companion.type = "Dog";
// loof.companion.companion = new Character("Frank");
// loof.companion.companion.type = "Flea";
// loof.companion.companion.inventory = ["hat", "sunglasses"];

// console.log(loof)

// Part 3
class Adventurer extends Character {
    constructor(name, role, weapon) {
        super(name);
        this.role = role; // adventurers have specialized roles
        this.weapon = weapon
        this.inventory.push("bedroll", "50 gold coins", "elixer"); // Every adventurer starts with 50 gold coins
    }

    scount() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    fight () {
        console.log(`${this.name} attacks and swings his ${this.weapon}!`)
    }
}

class Companion extends Character {
    constructor(name, type, attack, isAwake, isMoving) {
        super(name)
        this.type = type
        this.attack = attack 
        this.isAwake = isAwake
        this.isMoving = isMoving
    }
    fight() {
        console.log(`${this.name} attacks with a ${this.attack}!`)
    }
}
const loof = new Adventurer("Loof", "City Boy", "bat")
const diggy = new Companion("Diggy", "dog", "bite", true, true)
const frank = new Companion("Frank", "flea", "bite", true, true)
console.log(loof)
console.log(diggy)
console.log(frank)