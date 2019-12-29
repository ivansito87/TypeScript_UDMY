import { MatchResult } from "./enums/MatchResult.enum";
import { CsvFileReaderNoAbstract } from "./classes/CsvFileReaderNoAbstract";
import { MatchReaderRefactor } from "./classes/MatchReaderRefactor";
import { MatchReader } from "./classes/MatchReader";

// Create an object that satisfies the 'DataReader' interface for Refactored
const csvFileReaderNoAbstract = new CsvFileReaderNoAbstract("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface for Refactored
const matchReader = new MatchReaderRefactor(csvFileReaderNoAbstract);
matchReader.load();

const reader = new MatchReader("football.csv");
reader.read(); // read the data;

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.warn(`Manchester United has won ${manUnitedWins} games`);
