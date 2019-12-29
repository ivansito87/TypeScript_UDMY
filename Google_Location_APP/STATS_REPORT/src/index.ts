import fs from "fs";
import { MatchResult } from "./enums/MatchResult.enum";
import { CsvFileReader } from "./classes/CSVReader";
import { MatchReder } from "./classes/MatchReader";

const reader = new MatchReder("football.csv");
reader.read(); // read the data;

let manUnitedWins = 0;
for (let match of reader.data) {
  // console.log(match[5]);
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
