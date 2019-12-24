class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

        // MODIFIERS ||| ===???.>>> are the keywords that are called inside of the class
// Private 
    // The class is only accessible from inside it's own class
    // No one outside of the class can call this method or access the value

// Public
    // The method or the field is accessible for anywhere in our program 

// Protected
    // It means that only the parent class and the child classes have access to 
    // the method the only difference is that unlike private, any class that 
    // extends the parent class will also have access to the methods within both classes