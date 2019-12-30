import fs from "fs";

export class CsvFileReaderNoAbstract {
  // this method will help us with the logic for only the CSV file that we have since the map method above was
  // only defined to works specifically with the CSV file that we have, we need to make this more reusable for any kind of data
  // this method will help us abstract the logic for the CSV file
  // since the MatchDataTuple has the value of an array
  // TS knows that the data field will be an array of arrays
  // like so data: Array<Array<string>> or data : string[][];
  data: string[][] = [];
  constructor(public fileName: string) {}
  public read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((rowString: string): string[] => {
        return rowString.split(",");
      });
  }
}
