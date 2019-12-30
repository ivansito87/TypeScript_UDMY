class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// @ts-ignore
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive = (): void => {
    console.log("broom");
  };

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const cart = new Car(4, "red");
cart.startDrivingProcess();
