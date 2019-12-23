import { VehicleInterface } from "./interfaces/vehicle.interface";

const apples: number = 5;
let fruits: string = "Bananas";
let now: Date = new Date();
let nothing: null = null;
let nada: undefined = undefined;

// Arrays -->
let colors: string[] = ["red", "blue", "orange"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
  constructor() {}
}

// The type of car variable can only and will only be of type of new instance of the car Clas
let car: Car = new Car();

let points: { x: number; y: number } = {
  x: 6,
  y: 10
};

// Functions
const logNumber: Function = (i: number): void => {
  console.log(i);
};

logNumber(145643); // logs 145643 to the console

// When to use annotations
const json = '{"x":2,"y":7}';
const coordinates = JSON.parse(json);
console.log(coordinates); // returns {x:2,y:7}




// Using Interfaces


      // new vehicle implememts 
                  // vehicleInterface
const newVehicle: VehicleInterface = {
  make: "Honda", // make:string as per interface
  model: 2016, // model:number as per interface
  broken: false, // broken:boolean as per interface
  bought: new Date(),
  printStats(): string {
    return `${this.make} ${this.model}`;
  }
};

const printVehicleStatus = (vehicle: VehicleInterface): void => {
  console.log(vehicle.printStats());
};

printVehicleStatus(newVehicle);
