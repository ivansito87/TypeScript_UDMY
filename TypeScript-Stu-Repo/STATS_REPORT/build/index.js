"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReaderNoAbstract_1 = require("./classes/CsvFileReaderNoAbstract");
var MatchReaderRefactor_1 = require("./classes/MatchReaderRefactor");
var MatchReader_1 = require("./classes/MatchReader");
var Summary_1 = require("./classes/Summary");
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
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read(); // read the data;
