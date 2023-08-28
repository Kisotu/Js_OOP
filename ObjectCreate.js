//object of prototype

const bookProtos = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in the year${this.year}`
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;

        return `${this.title} is ${years} years old`;
    }
}

//create object

// const book1 = Object.create(bookProtos);

// book1.title = "Merchant of Vernice";
// book1.author = "Wiiliam Shakespear";
// book1.year = "1886";
const book1 = Object.create(bookProtos, {
    title : {value : "Merchant of Venice"},
    author : {value : "William Shakespear"},
    year : {value : "1886"}
});


console.log(book1)