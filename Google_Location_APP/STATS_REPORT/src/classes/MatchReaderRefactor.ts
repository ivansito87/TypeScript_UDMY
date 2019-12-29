import { MatchResult } from "../enums/MatchResult.enum";
import { dateStringToDate } from "../utils/dateStringToDate";
import { CsvFileReaderNoAbstract } from "./CsvFileReaderNoAbstract";
/*
TUPLE define an array with all the properties
*/
type MatchDataTuple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReaderRefactor {
  matches: MatchDataTuple[] = [];

  constructor(public reader: CsvFileReaderNoAbstract) {}

  public load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchDataTuple => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
