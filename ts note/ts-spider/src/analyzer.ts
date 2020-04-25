import fs from 'fs';
import cheerio from 'cheerio';
import { AnalyzerType } from './crowller'

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

export default class Analyzer implements AnalyzerType {
  private getCoureInfo(html: string) {
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

  private generateJsonContent(courseInfo: CourseRet, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCoureInfo(html);
    // console.log('courseInfo', courseInfo)
    // console.log('filePath', filePath)
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }
}
