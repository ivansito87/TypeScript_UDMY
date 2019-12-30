"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_enum_1 = require("../enums/MatchResult.enum");
var WinsAnalyzer = /** @class */ (function() {
  function WinsAnalyzer(teamName) {
    this.teamName = teamName;
  }
  WinsAnalyzer.prototype.run = function(matches) {
    var wins = 0;
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
      var match = matches_1[_i];
      if (
        match[1] === "Man United" &&
        match[5] === MatchResult_enum_1.MatchResult.HomeWin
      ) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult_enum_1.MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return "Team " + this.teamName + " won " + wins + " games in total";
  };
  return WinsAnalyzer;
})();
exports.WinsAnalyzer = WinsAnalyzer;
