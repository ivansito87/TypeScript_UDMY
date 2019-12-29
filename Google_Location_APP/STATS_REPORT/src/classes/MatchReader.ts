import { dateStringToDate } from './../utils/dateStringToDate';
import { MatchResult } from './../enums/MatchResult.enum';
import { CsvFileReader } from './CSVReader';


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


export class MatchReder extends CsvFileReader<MatchDataTouple> {
  mapRow(singleRow: string[]): MatchDataTouple {
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
}

