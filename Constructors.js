//default constructors

class Person{
    constructor(){
        console.log("Object created"); //fires up every time a new object is created
        this.name = "unknown";
        this.age = 0;
    }

    printData(){
        console.log("Name = " + this.name);
        console.log("Age = " + this.age);
    }
}

let person1 = new Person();

person1.printData()// prints the default values provided by the constructor


let person2 = new Person(); // overrides the default constructor and sets new values.
person2.name = "Nishoyo";
person2.age = 34;

person2.printData();


//parametzed constructor

class Customer{
    constructor(name, age, city, gender, balance){
        this.name = name;
        this.age = age;
        this.city = city;
        this.gender = gender;
        this.balance = balance;
    };

    printCustomerData(){
        console.table(this) // prints the data of this instance
    }
}
let customer1 = new Customer("John Doe", 56, "Nairobi", "Male", 45000)
let customer2 = new Customer("Jane Wambui", 34, "New York", "Female", 600000)

customer1.printCustomerData()
customer2.printCustomerData()
