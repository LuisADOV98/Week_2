

import { Book } from "./book";

let book1: Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
console.log(book1.toString());
console.log(book1.getAuthor());
console.log(book1.getEditorial());
console.log(book1.getIsbn());
console.log(book1.getTitle());
console.log(book1.getnPages());

book1.setAutor("Dan Brown");
book1.setEditorial("Planeta");
book1.setTitle("Inferno");
book1.setnPages(600);

console.log(book1.toString());
console.log(book1.getAuthor());
console.log(book1.getTitle());
console.log(book1.getEditorial());
console.log(book1.getnPages());







