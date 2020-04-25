import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import Analyzer from './analyzer';

export interface AnalyzerType {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  async getRawHtml() {
    const ret = await superagent.get(this.url);
    return ret.text;
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: AnalyzerType) {
    this.initSpiderProcess();
  }
}

const secret = 'x3b174jsx';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
const analyzer = new Analyzer();
new Crowller(url, analyzer);
