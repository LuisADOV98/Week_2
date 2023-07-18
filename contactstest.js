


let {Contacts} = require("./Contacts");
const { Person } = require("./Person");



let persona2 = new Person("jesus", "rondon", 75, 178)
let persona3 = new Person("mario", "de oliveira", 100, 186)
let persona4 = new Person("jose", "de oliveira", 90, 183)
let persona5 = new Person("pedro", "mora", 78, 169);

let agenda = new Contacts()
agenda.contactos.push(persona2, persona3, persona4, persona5)

// console.log(agenda.contactos);
console.log(agenda.printPersons());
