"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var CaractersCollection_1 = require("./CaractersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
/**
 * Using the methods sort inside of the NumbersCollection Class after it
 * extended the Sorter Class now we have access to the sort method
 */
// const numberSorter = new Sorter(numbersCollection); // <-- Before
// numberSorter.sort(); // <-- Before
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 13, -5, 0]); // <-- After
numbersCollection.sort(); // <-- After
console.log(numbersCollection.data);
/**
 * Using the methods sort inside of the charactersCollection Class after it
 * extended the Sorter Class now we have access to the sort method
 */
var charactersCollection = new CaractersCollection_1.CharactersCollection("Xyaab"); // <-- After
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
var _linkedList = new LinkedList_1.LinkedList();
_linkedList.add(500);
_linkedList.add(-10);
_linkedList.add(-3);
_linkedList.add(4);
// We now have access to all the methods inside of the class
_linkedList.sort(); // <-- After
_linkedList.print(); // <-- After
