"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateStringToDate_1 = require("../utils/dateStringToDate");
var CsvFileReaderNoAbstract_1 = require("./CsvFileReaderNoAbstract");
var MatchReaderRefactor = /** @class */ (function() {
  function MatchReaderRefactor(reader) {
    this.reader = reader;
    this.matches = [];
  }
  MatchReaderRefactor.fromCsv = function(fileName) {
    return new MatchReaderRefactor(
      new CsvFileReaderNoAbstract_1.CsvFileReaderNoAbstract(fileName)
    );
  };
  MatchReaderRefactor.prototype.load = function() {
    this.reader.read();
    this.matches = this.reader.data.map(function(row) {
      return [
        dateStringToDate_1.dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5],
        row[6]
      ];
    });
  };
  return MatchReaderRefactor;
})();
exports.MatchReaderRefactor = MatchReaderRefactor;
