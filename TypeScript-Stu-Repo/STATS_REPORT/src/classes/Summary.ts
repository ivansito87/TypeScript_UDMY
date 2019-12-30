import {
  AnalyserInterface,
  OutputTargetInterface
} from "../Interfaces/Summary.Interfaces";
import { MatchDataTuple } from "../utils/MatchDataTuple";
import { WinsAnalyzer } from "../Analyzers/WinsAnalyzer";
import { HtmlReport } from "../reportTargets/htmlReport";

export class Summary {
  /*
   static methods can be called at any time without having to create an instance
   of the class we can directly call Summary.winsAnalysisWithHtmlReport();
   unlike const summary = new Summary();
   then call summary.buildAndPrintReport()
  */
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }

  constructor(
    public analyzer: AnalyserInterface,
    public outputTarget: OutputTargetInterface
  ) {}

  buildAndPrintReport(matches: MatchDataTuple[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
