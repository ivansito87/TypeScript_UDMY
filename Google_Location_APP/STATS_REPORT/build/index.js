"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_enum_1 = require("./enums/MatchResult.enum");
var CsvFileReaderNoAbstract_1 = require("./classes/CsvFileReaderNoAbstract");
var MatchReaderRefactor_1 = require("./classes/MatchReaderRefactor");
var MatchReader_1 = require("./classes/MatchReader");
// Create an object that satisfies the 'DataReader' interface for Refactored
var csvFileReaderNoAbstract = new CsvFileReaderNoAbstract_1.CsvFileReaderNoAbstract(
  "football.csv"
);
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface for Refactored
var matchReader = new MatchReaderRefactor_1.MatchReaderRefactor(
  csvFileReaderNoAbstract
);
matchReader.load();
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read(); // read the data;
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
  var match = _a[_i];
  if (
    match[1] === "Man United" &&
    match[5] === MatchResult_enum_1.MatchResult.HomeWin
  ) {
    manUnitedWins++;
  } else if (
    match[2] === "Man United" &&
    match[5] === MatchResult_enum_1.MatchResult.AwayWin
  ) {
    manUnitedWins++;
  }
}
console.warn("Manchester United has won " + manUnitedWins + " games");
