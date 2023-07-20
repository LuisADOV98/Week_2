

import { Person } from "./person";


let persona2: Person = new Person("jose", 27, "san jose 25")

 console.log(persona2.printName());
 console.log(persona2.yearOfBirth(2023));
 console.log(persona2.getAddress());
 
 persona2.setAddress("calle santo angel 48");
 console.log(persona2.getAddress());
 