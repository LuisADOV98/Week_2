"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(nombre, age, address) {
        this.nombre = nombre;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        return "El nombre es: ".concat(this.nombre);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return "El a\u00F1o de nacimiento fue: ".concat(currentYear - this.age);
    };
    Person.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Person.prototype.getAddress = function () {
        return "El nombre de la calle es: ".concat(this.address);
    };
    return Person;
}());
exports.Person = Person;
var persona1 = new Person("luis", 25, "fuente de lima 21");
console.log(persona1.printName());
console.log(persona1.yearOfBirth(2023));
console.log(persona1.getAddress());
persona1.setAddress("calle atocha 30");
console.log(persona1.getAddress());
