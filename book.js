"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (NewnPages) {
        this.nPages = NewnPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setIsbn = function (newIsbn) {
        this.isbn = newIsbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAutor = function (newAuthor) {
        this.author = newAuthor;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    Book.prototype.toString = function () {
        return "\n                    title - ".concat(this.title, "\n                    Number of Pages - ").concat(this.nPages, "\n                    ISBN - ").concat(this.isbn, "\n                    Author - ").concat(this.author, "\n                    Editorial - ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
