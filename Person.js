


 class Person{

        constructor(nombre, apellido, peso, altura){
            this.nombre = nombre
            this.apellido = apellido
            this.edad = 25
            this.anyoNacimiento = 1998
            this.peso = peso
            this.altura = altura
            this.colorPelo = "castaño"
            this.hobbies = ["gaming", "buscar a pepe", "ver tv"]
        }
        CalIMC(peso, altura){
            return (this.altura^2) / this.peso 
        }
        
        CalEdad(esteanyo){
             return esteanyo - this.anyoNacimiento
        }
        printAll() {
            return (`
            - ${this.nombre}
            - ${this.apellido}
            - ${this.anyoNacimiento}
            - ${this.edad}
            - ${this.peso}
            - ${this.altura}
            - ${this.colorPelo}
            - ${this.hobbies}
                `)
        }

        printHobbies(){
           return(`
           - ${this.hobbies[0]}
           - ${this.hobbies[1]}
           - ${this.hobbies[2]}
                `);
        }
        }

module.exports = {Person}

// let persona = new Person("luis", "de Oliveira", 100, 181)

// console.log(persona.CalIMC(100, 181));

// console.log(persona.CalEdad(2023));

// console.log(persona.printAll());

// console.log(persona.printHobbies());

