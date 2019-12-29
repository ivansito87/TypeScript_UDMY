import { MatchResult } from "../enums/MatchResult.enum";

/*
TUPLE define an array with all the properties that will have the same types as defined in this [TUPLE]
*/
export type MatchDataTuple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
