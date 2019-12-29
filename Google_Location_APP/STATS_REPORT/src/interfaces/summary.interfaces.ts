import { MatchDataTuple } from "../utils/MatchDataTuple";

export interface AnalyserInterface {
  run(matches: MatchDataTuple[]): string;
}

export interface OutputTargetInterface {
  print(report: string): void;
}
