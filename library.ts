import { Book } from "./book"


export class Library{
    private books:Book[]
    private address:string
    private manager:string

    constructor(books:Book[], address: string, manager:string ){
        this.books = books
        this.address = address
        this.manager = manager
    }
    getBooks(): Book[]{
        return this.books
    }
    setBooks(newBooks:Book[]):void{
        this.books = newBooks
    }
    getAddress():string{
        return `Esta es la direccion${this.address}`
    }
    setAddress(newAddress):void{
        this.address = newAddress
    }
    getManager():string{
        return `Este es el manager ${this.manager}`
    }
    setManager(newManager):void{
        this.manager = newManager
    }
    toString():string{
        return `
            este es mi libro ${this.books}
            esta es mi direccion ${this.address}
            este es el manager ${this.manager}  `
    }
    getNumberOfBooks():number{
        return this.books.length
    }
    findByAuthor(author:string):Book[]{
       console.log(author);
       
        return this.books.filter(book =>  book.getAuthor() == author )

    }
    }


