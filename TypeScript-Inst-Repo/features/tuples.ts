const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Tuples add orders to arrays, as substitution of key value pairs,
// we use tuples to identify the order, we hve to define the tuple before

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
