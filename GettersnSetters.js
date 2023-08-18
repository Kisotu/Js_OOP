//Getters

class Square {
    get area(){
        console.log("Calling getter")
        
        return this.side * this.side;
    }
};

let square1 = new Square();
square1.side = 5;

console.log(square1.area)

//Setters

class Person{
    get name(){
        return this._name;
    };

    get age(){
        return this._age;
    };

    //basic setter
    set name(nameValue){
        this._name = nameValue
    }

    //setter with validation

    set age(ageValue){
        if(ageValue<0){
            this._age = 0;
            return;
        }
        this._age = ageValue;
    };

    printData(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age)
    }
}

let personX = new Person();

personX.name = "Marindany"
personX.age = 63;

personX.printData();


//getter and setter customization
class Rectangle{
    getSide(roundUp){
        //customized getter
        if(roundUp){
            return Number.parseFloat(this._side.toFixed(2));
        }
        return this._side;
    }

    get area(){
        return this._side * this._side;
    };

    set side(sideValue){
        this._side = sideValue;
    }
}

let rect = new Rectangle()
rect.side = 2.223;

console.log("Side: " + rect.getSide(false));
console.log("Round Up side: " + rect.getSide(true));
console.log("Area: " + rect.area)


//customized setter

class Human{
    setNames(firstName, middleName, lastName){//setter with many parameters
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName
    }

    get firstName(){
        return this._firstName
    }
    get middleName(){
        return this._middleName
    }
    get lastName(){
        return this._lastName
    }

    get age(){
        return this._age;
    }
    set age(ageValue){
        this._age = ageValue
    }
}

let human = new Human()

human.setNames("Maunda", "Oyo", "Milolo");
human.age = 45;


console.log("First Name: " + human.firstName)
console.log("Middle Name: " + human.middleName)
console.log("Last Name: " + human.lastName)
console.log("Age: " + human.age)
console.log(human)