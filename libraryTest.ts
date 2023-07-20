
import { Book } from "./book";
import { Library } from "./library";

let book1: Book = new Book("la reina roja", 310, "5839545-BC555551", "victoria adyers", "planeta")
let book2: Book = new Book("El codigo Da Vinci", 580, "5684255-BC548856", "Dan Brown", "New Editorial")
let book3: Book = new Book("100 años de soledad", 101, "5468135-BC791355", "Garcia Marquez", "Planeta")
let libros: Library = new Library([], "Atocha 38", "Luis Vieira");
libros.setBooks([book1,book2,book3])

// console.log(libros.toString());
// console.log(libros.getBooks());
// console.log(libros.getAddress());
// console.log(libros.getManager());
// console.log(libros.getNumberOfBooks());
// console.log(libros.findByAuthor("Dan Brown"));

