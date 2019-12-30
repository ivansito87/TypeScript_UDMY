import { UserInterface } from "./user.interface";

export class Attributes<T> {
  constructor(private data: T) {}

  // get method to get the name or the age
  // Generic constraint to limit the types that K = key
  // so it can only be a one of the types of T
  // K can only be from type T we can only ever call get with a key from T
  public get = <K extends keyof T>(key: K): T[K] => {
    // Look at the interface at T and return ^☝🏻 the value that K has
    // @ts-ignore
    return this.data[key];
  };

  public set(updateUser: T): void {
    // Telling TS take all the properties from updateUser{} and assign them
    // into the object data that exist within the class
    // @ts-ignore
    this.data = { ...updateUser };
  }

  getAll(): T {
    return this.data;
  }
}
/*

This is the way we could call this class
const attrs = new Attributes<UserInterface>({
  id: 5, age: 20, name: 'Lucas'
});

const name = attrs.get('name'); // returns a string type
const number = attrs.get('age'); // returns a number type

*/

/*
 * Quick remainder on Accessors
 *
 * getters are defined when you are just trying to get something back
 * you avoid calling the method with the
 * console.log(class.getName()); //<- without getter
 * console.log(class.getName); // <- with getter prints the name
 *
 * */
