"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReaderNoAbstract = /** @class */ (function() {
  function CsvFileReaderNoAbstract(fileName) {
    this.fileName = fileName;
    // this method will help us with the logic for only the CSV file that we have since the map method above was
    // only defined to works specifically with the CSV file that we have, we need to make this more reusable for any kind of data
    // this method will help us abstract the logic for the CSV file
    // since the MatchDataTuple has the value of an array
    // TS knows that the data field will be an array of arrays
    // like so data: Array<Array<string>> or data : string[][];
    this.data = [];
  }
  CsvFileReaderNoAbstract.prototype.read = function() {
    this.data = fs_1.default
      .readFileSync(this.fileName, {
        encoding: "utf-8"
      })
      .split("\n")
      .map(function(rowString) {
        return rowString.split(",");
      });
  };
  return CsvFileReaderNoAbstract;
})();
exports.CsvFileReaderNoAbstract = CsvFileReaderNoAbstract;
