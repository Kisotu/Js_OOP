class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getDetails(){
        return `${this.name} - $${this.price}`;
    }
}

class Book extends Product{
    constructor(name, price, author, pages){
        super(name, price)
        this.author = author;
        this.pages = pages;
    }

    getDetails(){//overwrites default method
        return `${this.name} by ${this.author} - $${this.price}`
    }
}

class SmartPhone extends Product{
    constructor(name, price, model){
        super(name, price)
        this.model = model;
    }
    //doesnt overwrite default method
}

class Movie extends Product{
    constructor(name, price, director, runtime){
        super(name, price)
        this.director = director;
        this.runtime = runtime;
    };

    getDetails(){
        return `${this.name} directed by ${this.director} - ${this.runtime} minutes - $${this.price}`
    }
}




let book1 = new Book("The Shinning", 19.99, "Stephen King", 447);
console.log(book1.getDetails());


let phone1 = new SmartPhone("Redmi", 75.99, "Xiaomi");
console.log(phone1.getDetails());

let movie1 = new Movie("The Matrix", 10.99, "Wachowsli Sisters", 136);
console.log(movie1.getDetails())