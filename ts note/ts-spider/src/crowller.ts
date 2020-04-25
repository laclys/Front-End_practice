import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import cheerio from 'cheerio';

interface Course {
  title: string;
  count: number;
}

interface CourseRet {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

class Crowller {
  private secret = 'x3b174jsx';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private filePath = path.resolve(__dirname, '../data/course.json');

  getCoureInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];
    courseItems.map((index, ele) => {
      const descs = $(ele).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split('：')[1]);
      courseInfos.push({
        title,
        count,
      });
    });
    return {
      time: new Date().getTime(),
      data: courseInfos,
    };
  }

  async getRawHtml() {
    const ret = await superagent.get(this.url);
    return ret.text;
  }

  generateJsonContent(courseInfo: CourseRet) {
    let fileContent: Content = {};
    if (fs.existsSync(this.filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent
  }

  writeFile (content: string) {
    fs.writeFileSync(this.filePath, 'utf-8')
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const courseInfo = this.getCoureInfo(html);
    const fileContent = this.generateJsonContent(courseInfo);
    this.writeFile(JSON.stringify(fileContent))
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();
