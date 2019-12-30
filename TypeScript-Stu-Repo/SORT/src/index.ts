import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CaractersCollection";
import { NumbersCollection } from "./NumbersCollection";

/**
 * Using the methods sort inside of the NumbersCollection Class after it
 * extended the Sorter Class now we have access to the sort method
 */
// const numberSorter = new Sorter(numbersCollection); // <-- Before
// numberSorter.sort(); // <-- Before
const numbersCollection = new NumbersCollection([50, 13, -5, 0]); // <-- After
numbersCollection.sort(); // <-- After
console.log(numbersCollection.data);

/**
 * Using the methods sort inside of the charactersCollection Class after it
 * extended the Sorter Class now we have access to the sort method
 */
const charactersCollection = new CharactersCollection("Xyaab"); // <-- After
// const caractersSorter = new Sorter(charactersCollection); // <-- Before
// caracterSorter.sort(); // <-- Before
charactersCollection.sort(); // <-- After
console.log(charactersCollection.data);

/**
 * Using the methods sort inside of the LinkedList Class after it
 * extended the Sorter Class now we have access to the sort method
 */
// const linkedListSorter = new Sorter(_linkedList); // <-- Before
// const stringSorter = new Sorter(charactersCollection); // <-- Before
// stringSorter.sort();
// linkedListSorter.sort();

const _linkedList = new LinkedList();
_linkedList.add(500);
_linkedList.add(-10);
_linkedList.add(-3);
_linkedList.add(4);

// We now have access to all the methods inside of the class
_linkedList.sort(); // <-- After
_linkedList.print(); // <-- After


