import { LocationInterface } from "../interfaces/location.interface";
import { Faker } from "./../utils/faker";

export class Company {
  public name: string;
  public catchPrashe: string;
  public location: LocationInterface = {
    long: null,
    lat: null
  };

  constructor() {
    this.name = Faker.catchPrashe();
    this.catchPrashe = Faker.getcatchPrashe();
    this.location = {
      long: Faker.getLongitude(),
      lat: Faker.getLatitude()
    };
  }
}
