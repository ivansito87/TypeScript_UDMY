import { Faker } from "./../utils/faker";
import { LocationInterface } from "../interfaces/location.interface";

export class User {
  public firstName: string;
  public lastName: string;
  public location: LocationInterface = {
    long: null,
    lat: null
  };

  constructor(gender?: number) {
    this.firstName = Faker.getFirstName(gender);
    this.lastName = Faker.getLastName();
    this.location = {
      long: Faker.getLongitude(),
      lat: Faker.getLatitude()
    };
  }
}
