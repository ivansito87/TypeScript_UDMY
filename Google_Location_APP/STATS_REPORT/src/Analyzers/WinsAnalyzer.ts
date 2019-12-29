import { AnalyserInterface } from "../Interfaces/Summary.Interfaces";
import { MatchDataTuple } from "../utils/MatchDataTuple";
import { MatchResult } from "../enums/MatchResult.enum";

export class WinsAnalyzer implements AnalyserInterface {
  constructor(public teamName: string) {}
  run(matches: MatchDataTuple[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games in total`;
  }
}
