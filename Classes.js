class Person {
    constructor(id, name, age, location){
        this.id = id;
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getDetails = () => {
        console.log("Name: " + this.name);
        console.log("ID: " + this.id);
        console.log("Age: " + this.age);
        console.log("Location: " + this.location);
    }
};

let Pedro = new Person(7586, "Petero", 45, "Nairobi");
// console.log(Pedro.id)


class Rectangle {
    calcArea(){
        return this.height * this.width;
    }

    printData(){
        console.log("Height is: " + this.height);
        console.log("Width is: " + this.width);

        let area = this.calcArea()
        console.log("Area of the rectangle is : " + area);
    }
}

let rect = new Rectangle();

rect.height = 7;
rect.width = 12;

// rect.printData()