import { getContent } from "./../utils/MapInfoWindow";
import { Faker } from "./../utils/faker";
import { LocationInterface } from "../interfaces/location.interface";
import { MarkerInterface } from "./CustomMap.interface";

// By adding the implememts keyword we are implicitly saying that the user class has
// to mandatory have all the felds that the interface in this case color is missing we need
// to add it
export class User implements MarkerInterface {
  public firstName: string;
  public lastName: string;
  public location: LocationInterface = {
    lng: null,
    lat: null
  };
  /**
   * color as per the interface requires it  */
  public color: string = "red";

  constructor(gender?: number) {
    this.firstName = Faker.getFirstName(gender);
    this.lastName = Faker.getLastName();
    this.location = {
      lng: Faker.getLongitude(),
      lat: Faker.getLatitude()
    };
  }

  markerContent(): string {
    return getContent(this.firstName);
  }
}
