import fs from "fs";
import { OutputTargetInterface } from "../Interfaces/Summary.Interfaces";

export class HtmlReport implements OutputTargetInterface {
  print(report: string): void {
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;
    fs.writeFileSync("report.html", html);
  }
}
