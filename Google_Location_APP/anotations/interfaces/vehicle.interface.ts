export interface VehicleInterface {
  make: string;
  model: number;
  broken: boolean;
  bought: Date;
  printStats(): string; // just defines a function that returns a string the logic remains with the usage of the interface
}
