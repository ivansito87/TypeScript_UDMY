class Vehicle {
  make: string = "Just a Vahicle";
  constructor(theMakeOfTheCar: string) {
    this.make = theMakeOfTheCar;
  }
  drive(): void {
    console.log("Broom Broom!");
  }
  honk(): void {
    console.log("Beep Beep");
  }
  printMake(): string {
    return `${this.make}`;
  }
}

class Car extends Vehicle {
  constructor(make: string) {
    super(make);
  }

  breake(): void {
    // We can add methods that are unique to the children
    console.log("Awww!");
  }
  honk(): void {
    // We can also modify the default methods from the parent
    console.log("Cars Beep");
  }

  public logMake(): void {
    console.log(super.printMake);
  }
}

const car = new Vehicle("Honda");
const honda = new Car("Honda");
car.honk();
honda.logMake();
honda.breake();
console.log(car.printMake);
