// Fonction constructeur 
function Ninja(name, age) {
    this.name = name;
    this.age = age
}

// sans le mot clé new 
function Ninja2(name, age) {
    let obj = {}
    obj.name = name;
    obj.age = age

    return obj
}


let madara =  new Ninja("Madara", 100)
let obito =  Ninja2("Obito", 33)

// Toutes en javascript ont un prototypes`
Ninja.prototype.sayHi = function() {
    console.log(`Hello my name is ${this.name}`)
}

madara.sayHi()

Ninja.prototype.village = "Konoha" 

function Uchiha(name, age, sharingan) {
    Ninja.call(this, name, age)
    this.sharingan = sharingan
}

let sasuke = new Uchiha('Sasuke', 17, "Mangekyou Sharingan")

// héritage 
Uchiha.prototype = Object.create(Ninja.prototype)
Uchiha.prototype.constructor = Uchiha

let itachi = new Uchiha('Itachi', 23, "Mangekyou Sharingan")

console.log(itachi.__proto__.__proto__) // Prototype de Ninja
// évite d'accéder directement à __proto__, on utilise plutot Object.getPrototypeOf()
console.log(Object.getPrototypeOf(itachi))

console.log(itachi.hasOwnProperty("name")) // true
console.log(itachi.hasOwnProperty("village")) // false

// on peut aussi verifier si un objet est le prototype d'un autre
Ninja.prototype.isPrototypeOf(itachi)
Uchiha.prototype.isPrototypeOf(itachi)
Object.prototype.isPrototypeOf(itachi)

let itachi2 = {...itachi} 
itachi2.__proto__ // Object 

let itachi3 = Object.create(itachi)
console.log(itachi3.__proto__) // itachi
console.log(itachi3.__proto__.__proto__) // Ninja
console.log(itachi3.__proto__.__proto__.__proto__) // Object
console.log(itachi3.__proto__.__proto__.__proto__.__proto__) // null

// HERITAGE
// ES6 

class Pirate {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    sayHi () {
        console.log(`Hello my name is ${this.name}`)
    }
}

let luffy = new Pirate("Luffy", 18)
let ussop = new Pirate("Ussop", 20)

console.log(typeof Pirate) // function 

luffy.__proto__  // Pirate
console.log(luffy.__proto__ === Pirate.prototype)
// Les classe en JS : Syntaxical sugar 
// héritage 
class Yonkou extends Pirate {
    constructor(nom, age, devilFruit, bounty) {
        super(nom, age)
        this.devilFruit = devilFruit
        this.bounty = bounty
    }
    // rédifinition de la méthode sayHi() : Polymorphisme
    sayHi() {
        return `Salut je suis ${this.name} et j'ai une prime de ${this.bounty}`
    }

}

let shanks = new Yonkou("Shanks", 40, "none", 40000000000)

class Mage {
    constructor(nom, magie) {
        this.nom = nom
        this.magie = magie
        this.lancerUnSort = this.lancerUnSort.bind(this) // on lie la fonction à son contexte
    }

    lancerUnSort() {
        return `${this.nom} lance le sort ${this.magie}`
    }
}

let natsu = new Mage("Natsu", "Dragon de feu")
let gray = new Mage("Gray", "Dome de Glace")

let natsuSort = natsu.lancerUnSort.bind(natsu)
let graySort = gray.lancerUnSort.bind(gray)

let natsuSort2 = natsu.lancerUnSort


// getter et setter 
















