import superagent from 'superagent';
import cheerio from 'cheerio';

interface Course {
  title: string,
  count: number
}

class Crowller {
  private secret = 'x3b174jsx';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  getCoureIInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseIInfos: Course[] = [];
    courseItems.map((index, ele) => {
      const descs = $(ele).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split('：')[1]);
      courseIInfos.push({
        title,
        count
      })
    });
    const res = {
      time: new Date().getTime(),
      data: courseIInfos
    }
    console.log('res', res)
  }

  async getRawHtml() {
    const ret = await superagent.get(this.url);
    this.getCoureIInfo(ret.text);
  }

  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crowller();
