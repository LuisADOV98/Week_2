"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var agenda = new contacts_1.Contacts();
var persona10 = new person_1.Person("juan", 30, "santo angel 48");
agenda.people.push(persona10);
console.log(agenda.printCalendar());
