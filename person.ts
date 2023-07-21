
export class Person{
    public nombre: string;
    public age: number;
    private address: string;
 
         constructor(nombre: string, age: number, address: string){
             
             this.nombre = nombre;
             this.age = age;
             this.address = address;
 
     }
 
     printName(): string{
     return `El nombre es: ${this.nombre}`
     }
 
     yearOfBirth(currentYear: number):number{
         return currentYear - this.age
 
     }
     setAddress(newAddress: string):void{
 
        this.address = newAddress
 
     }
     getAddress():string{
       return  `El nombre de la calle es: ${this.address}`
 
     }
 
 }
 
 let persona1: Person = new Person("luis", 25, "fuente de lima 21")
//  console.log(persona1.printName());
//  console.log(persona1.yearOfBirth(2023));
//  console.log(persona1.getAddress());
 
//  persona1.setAddress("calle atocha 30");
//  console.log(persona1.getAddress());
 
 