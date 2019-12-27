import { Sortable } from './Sortable.interface';
import { NumbersCollection } from "./NumbersCollection";


export class Sorter {
  constructor(public collection: Sortable) {} // Short circuit for setting a field
  // --- Bubble sort method ---
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
