"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.setBooks = function (newBooks) {
        this.books = newBooks;
    };
    Library.prototype.getAddress = function () {
        return "Esta es la direccion".concat(this.address);
    };
    Library.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.getManager = function () {
        return "Este es el manager ".concat(this.manager);
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    Library.prototype.toString = function () {
        return "\n            este es mi libro ".concat(this.books, "\n            esta es mi direccion ").concat(this.address, "\n            este es el manager ").concat(this.manager, "  ");
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        console.log(author);
        return this.books.filter(function (book) { return book.getAuthor() == author; });
    };
    return Library;
}());
exports.Library = Library;
