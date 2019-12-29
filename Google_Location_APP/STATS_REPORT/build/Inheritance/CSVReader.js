"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function() {
  function CsvFileReader(fileName) {
    this.fileName = fileName;
    // since the MatchDataTuple has the value of an array
    // TS knows that the data field will be an array of arrays
    // like so data: Array<Array<string>> or data : string[][];
    this.data = [];
  }
  CsvFileReader.prototype.read = function() {
    this.data = fs_1.default
      .readFileSync(this.fileName, {
        encoding: "utf-8"
      })
      .split("\n")
      .map(function(rowString) {
        return rowString.split(",");
      })
      .map(this.mapRow);
  };
  return CsvFileReader;
})();
exports.CsvFileReader = CsvFileReader;
