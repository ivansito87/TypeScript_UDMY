"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_enum_1 = require("./enums/MatchResult.enum");
var CSVReader_1 = require("./classes/CSVReader");
var reader = new CSVReader_1.CsvFileReader("football.csv");
reader.read(); // read the data;
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    // console.log(match[5]);
    if (match[1] === "Man United" && match[5] === MatchResult_enum_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_enum_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
