// Implement a simple library management system with the following classes:

// Book
// Properties: title, author, pages, checkedOut
// Methods: checkOut(), return()
// Library
// Properties: name, books (array of Book objects)
// Methods: addBook(), checkOutBook(), receiveBook()

// Usage:

// // Create library 
// const myLibrary = new Library('New City Library');

// // Add some books 
// myLibrary.addBook(new Book('The Final Empire', 'Brandon Sanderson', 541));
// myLibrary.addBook(new Book('The Hero of Ages', 'Brandon Sanderson', 556));

// // Checkout a book
// myLibrary.checkOutBook('The Final Empire');

// // Return a book
// myLibrary.receiveBook('The Final Empire'); 

// // View library books
// console.log(myLibrary.books);


class Book{
    constructor(title, author, pages, checkedOut){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.checkedOut = false;
    }
    checkOut(){
        this.checkedOut = true;
    }

    returnBook(){
        this.checkedOut = false;
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        this.books.push(book)
    }
    checkOutBook(title){
        const book = this.books.find(book => book.title ===title);
        if(book){
            book.checkOut();
            return book;
        }
        return null;
    }

    receiveBook(title){
        const book = this.books.find(book => book.title ===title);
        if(book){
            book.returnBook();
            return book;
        }
        return null;
    }
    
}

const library = new Library("My Library");

const book1 = new Book('The Final Empire', "Brandon Sanderson", 541);
library.addBook(book1);

library.checkOutBook('The Final Empire');
console.log(book1.checkedOut);

library.receiveBook("The Final Empire");

console.log(book1.checkedOut);