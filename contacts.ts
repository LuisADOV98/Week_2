
import { Person } from "./person";

class Contacts{

    public people: []
     
    constructor(){
        this.people = []
    }

    printCalendar(){
        return this.people
    }
}
let agenda: Contacts = new Contacts()
let persona10: Person = new Person("juan", 30, "santo angel 48")

agenda.people.push(persona10)


