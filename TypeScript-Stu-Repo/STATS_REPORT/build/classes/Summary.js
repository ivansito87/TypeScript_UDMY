"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalyzer_1 = require("../Analyzers/WinsAnalyzer");
var htmlReport_1 = require("../reportTargets/htmlReport");
var Summary = /** @class */ (function() {
  function Summary(analyzer, outputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }
  /*
     static methods can be called at any time without having to create an instance
     of the class we can directly call Summary.winsAnalysisWithHtmlReport();
     unlike const summary = new Summary();
     then call summary.buildAndPrintReport()
    */
  Summary.winsAnalysisWithHtmlReport = function(team) {
    return new Summary(
      new WinsAnalyzer_1.WinsAnalyzer(team),
      new htmlReport_1.HtmlReport()
    );
  };
  Summary.prototype.buildAndPrintReport = function(matches) {
    var output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
  return Summary;
})();
exports.Summary = Summary;
