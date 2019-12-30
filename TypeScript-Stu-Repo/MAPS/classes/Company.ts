import { LocationInterface } from "../interfaces/location.interface";
import { Faker } from "./../utils/faker";
import { getContent } from "../utils/MapInfoWindow";
import { MarkerInterface } from "./CustomMap.interface";

export class Company implements MarkerInterface {
  public name: string;
  public catchPrashe: string;
  public location: LocationInterface = {
    lng: null,
    lat: null
  };
  /**
   * color property defined by the interface when the class is implemented
   * the fields that are in the interface must exist within the class
   * in order to satisfy the interface  
   **/
  public color: string = "green";

  constructor() {
    this.name = Faker.catchPrashe();
    this.catchPrashe = Faker.getcatchPrashe();
    this.location = {
      lng: Faker.getLongitude(),
      lat: Faker.getLatitude()
    };
  }

  markerContent(): string {
    return getContent(this.name);
  }
}
