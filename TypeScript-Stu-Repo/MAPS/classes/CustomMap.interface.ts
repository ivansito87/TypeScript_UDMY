import { LocationInterface } from "./../interfaces/location.interface";

// Interface that checks if the arguments passed to the call function have this
// fields or propertied in this case TypeScript doesn't care about any other
// properties as long as what is passed has this type
export interface MarkerInterface {
  location: LocationInterface;
  markerContent(): string;
  color: string;
}
