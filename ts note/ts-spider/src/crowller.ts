import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import Analyzer from './analyzer';
// import DellAnalyzer from './dellAnalyzer';

export interface AnalyzerType {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  private async getRawHtml() {
    const ret = await superagent.get(this.url);
    return ret.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: AnalyzerType) {
    this.initSpiderProcess();
  }
}

export default Crowller;
