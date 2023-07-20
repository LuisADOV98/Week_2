

export class Book{

    private title:string
    private nPages:number
    private isbn:string
    private author: string
    private editorial:string

        constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){

        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
     }

        getTitle(){
            return this.title
        }
        setTitle(newTitle){
            this.title = newTitle
        }

        getnPages(){
            return this.nPages
        }
        setnPages(NewnPages){
            this.nPages = NewnPages
        }

        getIsbn(){
            return this.isbn
        }
        setIsbn(newIsbn){
            this.isbn = newIsbn
        }

        getAuthor(){
            return this.author
        }
        setAutor(newAuthor){
            this.author = newAuthor
        }

        getEditorial(){
            return this.editorial
        }
        setEditorial(newEditorial){
            this.editorial = newEditorial
        }

        toString(){
            return `
                    title - ${this.title}
                    Number of Pages - ${this.nPages}
                    ISBN - ${this.isbn}
                    Author - ${this.author}
                    Editorial - ${this.editorial}` 
                    
        }

}

