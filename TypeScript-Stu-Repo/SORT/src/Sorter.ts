import { Sortable } from "./Sortable.interface";
import { NumbersCollection } from "./NumbersCollection";

export abstract class Sorter {

  // Abstartcing classes means that the methids and properties defined
  // inside of the class doesn't exist at the momemnt, but when is referenced
  // the classes who extend must provide the methods and fields listed here
  // the abstarct keyword meands that eventually it will have the values
  // provided here.
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // --- Bubble sort method ---
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
