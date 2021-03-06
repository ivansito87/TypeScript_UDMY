"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var dateStringToDate_1 = require("../utils/dateStringToDate");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function(_super) {
  __extends(MatchReader, _super);
  function MatchReader() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  MatchReader.prototype.mapRow = function(singleRow) {
    return [
      dateStringToDate_1.dateStringToDate(singleRow[0]),
      singleRow[1],
      singleRow[2],
      parseInt(singleRow[3]),
      parseInt(singleRow[4]),
      singleRow[5],
      singleRow[6]
    ];
  };
  return MatchReader;
})(CsvFileReader_1.CsvFileReader);
exports.MatchReader = MatchReader;
