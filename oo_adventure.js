// // Part 1
// const adventurer = {
//     name: "Loof",
//     health: 30,
//     inventory: ["bat", "elixer", "boost"],
//     companion: {
//         name: "Diggy",
//         type: "Dog",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["hat", "sunglasses"]
//         }
//     },
//     roll(mod = 0) {
//         const result = Number(Math.floor(Math.random() * 20 + 1 + mod));
//         console.log(`${this.name} rolled a ${result}`)
        
//     }
// }

// console.log(`Inventory:`)
// for (let item in adventurer.inventory) {
//     console.log(`${adventurer.inventory[item]}`)
// }



// Part 2
class Character {
    static MAX_HEALTH = 100; 
    constructor(name) {
        this.name = name
        this.health = Character.MAX_HEALTH
        this.inventory = []
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20 + 1 + mod);
        console.log(`${this.name} rolled ${result}`)
        return result
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
    static ROLES = ["City Boy", "Warrior", "Wizard", "Healer"]; 
    constructor(name, role, weapon) {
        if(!Adventurer.ROLES.includes(role)) {
            throw new Error (`${role} is not a valid role!`)
        }
        super(name);
        this.role = role; 
        this.weapon = weapon
        this.inventory.push("bedroll", "50 gold coins", "elixer"); // Every adventurer starts with a bedroll, 50 gold coins and an elixer
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(adventurer) {
        let dueling = true 
        while (dueling) {
            if (this.health === 50 || adventurer.health === 50) {
                if (this.health === 50 && adventurer.health > 50) {
                    console.log(`${this.name} faints...${adventurer.name} wins!`)
                    dueling = false
                    break
                }
                else if (adventurer.health === 50 && this.health > 50) {
                    console.log(`${adventurer.name} faints...${this.name} wins!`)
                    dueling = false
                    break
                }
            }

            let advAtk = adventurer.roll()
            let thisAtk = this.roll()
            
            if (advAtk > thisAtk) {
                console.log(`${adventurer.name} attacks with his ${adventurer.weapon} and hits ${this.name}!\n`)
                this.health -= 1
                console.log(`Health levels:\n${this.name}: ${this.health}\n${adventurer.name}: ${adventurer.health}\n`)
                
            }
            else if (thisAtk > advAtk) {
                console.log(`${this.name} attacks with his ${this.weapon} and hits ${adventurer.name}!\n`)
                adventurer.health -= 1
                console.log(`Health levels:\n${this.name}: ${this.health}\n${adventurer.name}: ${adventurer.health}\n`)
                
            }   
            else {
                console.log("Their weapons clash and cancel each other out!\n")
            } 
        }
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
}
const loof = new Adventurer("Loof", "City Boy", "bat")
const bizzy = new Adventurer("Bizzy", "Warrior", "sword")
const diggy = new Companion("Diggy", "dog", "bite", true, true)
const frank = new Companion("Frank", "flea", "bite", true, true)
loof.duel(bizzy)
