//part one
//Create a class for vehicle, each should have the following properties;
//make, model, year

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //creating a method called honk
    honk(){
        return 'Beep';
    }
    //method toString, returning a string containig make, model,year.
    toString(){
        //remember to put this.a
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

}
//part 2 create a class for car
class Car extends Vehicle{
    constructor(make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}
//part 3 create a class for motorcycle
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return 'VROOM!!!';
    }
}
//part 4 create a class for Garage, accepting capacity in the constructor.
class Garage{
    constructor( capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        //remember to call the right variable on the right which is Vehicle.
        if(!(newVehicle instanceof Vehicle)){
            throw new Error ("Only vehicles allowed in here");
        }
        //instead of returning, let's throw an error.
        if(this.vehicles.length >= this.capacity){
            throw new Error ("Can't add a new vehicle, we're full!!");
        }
        //we add new variable down here, no error.
        this.vehicles.push(newVehicle);
        return 'Vehicle added!!'
    }
}