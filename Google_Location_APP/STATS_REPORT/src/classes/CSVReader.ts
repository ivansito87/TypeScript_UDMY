import { dateStringToDate } from "./../utils/dateStringToDate";
import fs from "fs";
import { MatchResult } from "./../enums/MatchResult.enum";

/*
TOUPLE define an array with all the properties
*/
type MatchDataTouple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class CsvFileReader {
  // since the MatchDataTouple has the value of an array
  // TS knows that the data field will be an array of arrays
  // like so data: Array<Array<string>> or data : string[][];
  data: MatchDataTouple[] = [];
  constructor(public fileName: string) {}
  public read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((rowString: string): string[] => {
        return rowString.split(",");
      })
      .map(this.mapRow);
  }

  // this method will help us with the logic for only the CSV file that we have since the map method above was
  // only defined to works specifically with the CSV file that we have, we need to make this more reusable for any kind of data
  // this method will help us abstract the logic for the CSV file
  public mapRow(singleRow: string[]): MatchDataTouple { // the return of this method will be of the type TUPLE
    return [
      dateStringToDate(singleRow[0]),
      singleRow[1],
      singleRow[2],
      parseInt(singleRow[3]),
      parseInt(singleRow[4]),
      singleRow[5] as MatchResult, // type asersion by Devs override the behavior of TS we now that the vales are H | A | D as per the enum
      singleRow[6]
    ];
  }
}
