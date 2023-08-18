class Vehicle{
    constructor(){
        if(this.constructor ===Vehicle){
            throw new Error("Abstract classes cannot be instantiated")
        }
    }

    accelerate(){
        throw new Error("accelerate() must be implemented in a subclass")
    }

    brake(){
        console.log("The car is braking")
    }
}

class Car extends Vehicle{
    accelerate(){
        console.log("The car is accelerating!")
    }
}

let myCar = new Car();

myCar.accelerate();

myCar.brake();