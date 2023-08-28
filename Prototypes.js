//prototype methods

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getDetails = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
};


const book1 = new Book('Swords and Borns', 'Daniel Steel', 2012);

const book2 = new Book('Pilgrim\' Progress', 'John Bunyan', 1996);

console.log(book1.getDetails());
console.log(book2)