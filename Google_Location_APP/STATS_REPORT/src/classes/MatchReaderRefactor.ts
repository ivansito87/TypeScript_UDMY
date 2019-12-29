import { MatchResult } from "../enums/MatchResult.enum";
import { dateStringToDate } from "../utils/dateStringToDate";
import { MatchDataTuple } from "../utils/MatchDataTuple";
import { CsvFileReaderNoAbstract } from "./CsvFileReaderNoAbstract";

export class MatchReaderRefactor {
  static fromCsv(fileName: string): MatchReaderRefactor {
    return new MatchReaderRefactor(new CsvFileReaderNoAbstract(fileName));
  }

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
