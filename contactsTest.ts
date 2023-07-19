


import { Contacts } from "./contacts";
import { Person } from "./person";



let agenda: Contacts = new Contacts()
let persona10: Person = new Person("juan", 30, "santo angel 48")

agenda.people.push(persona10)
console.log(agenda.printCalendar());

