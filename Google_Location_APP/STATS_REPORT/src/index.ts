import { CsvFileReaderNoAbstract } from "./classes/CsvFileReaderNoAbstract";
import { MatchReaderRefactor } from "./classes/MatchReaderRefactor";
import { MatchReader } from "./classes/MatchReader";
import { Summary } from "./classes/Summary";

// Create an object that satisfies the 'DataReader' interface for Refactored
const csvFileReaderNoAbstract = new CsvFileReaderNoAbstract("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface for Refactored
const matchReader = new MatchReaderRefactor(csvFileReaderNoAbstract);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
const reader = new MatchReader("football.csv");
reader.read(); // read the data;
