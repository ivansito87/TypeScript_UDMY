import { OutputTargetInterface } from "../Interfaces/Summary.Interfaces";
export class ConsoleReport implements OutputTargetInterface {
  print(report: string): void {
    console.log(report);
  }
}
