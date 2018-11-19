import wepy from "wepy";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

export default class TimeMixin extends wepy.mixin {
  sectionToTime(start, end) {
    const mapSectionToTime = [
      {
        section: 1,
        start: { hour: 8, min: 0 },
        end: { hour: 8, min: 45 }
      },
      {
        section: 2,
        start: { hour: 8, min: 50 },
        end: { hour: 9, min: 35 }
      },
      {
        section: 3,
        start: { hour: 9, min: 50 },
        end: { hour: 10, min: 35 }
      },
      {
        section: 4,
        start: { hour: 10, min: 40 },
        end: { hour: 11, min: 25 }
      },
      {
        section: 5,
        start: { hour: 11, min: 30 },
        end: { hour: 12, min: 15 }
      },
      {
        section: 6,
        start: { hour: 13, min: 45 },
        end: { hour: 14, min: 30 }
      },
      {
        section: 7,
        start: { hour: 14, min: 35 },
        end: { hour: 15, min: 20 }
      },
      {
        section: 8,
        start: { hour: 15, min: 35 },
        end: { hour: 16, min: 20 }
      },
      {
        section: 9,
        start: { hour: 16, min: 25 },
        end: { hour: 17, min: 10 }
      },
      {
        section: 10,
        start: { hour: 18, min: 30 },
        end: { hour: 21, min: 5 }
      },
      {
        section: 12,
        start: { hour: 18, min: 30 },
        end: { hour: 21, min: 5 }
      }
    ];
    const startTime = mapSectionToTime.find(x => x.section === start);
    const endTime = mapSectionToTime.find(x => x.section === end);
    const startDate = new Date();
    const endDate = new Date();
    startDate.setHours(startTime.start.hour, startTime.start.min, 0);
    endDate.setHours(endTime.end.hour, endTime.end.min, 0);
    return {
      start: startDate,
      end: endDate
    };
  }

  courseIsStarted(start, end) {
    const now = new Date();
    if (
      now.getTime() - start.getTime() > 0 &&
      now.getTime() - end.getTime() < 0
    ) {
      // return 0 => 正在上课
      return 0;
    } else if (now.getTime() - end.getTime() > 0) {
      // return 3 => 课程已结束
      return 3;
    } else if (start.getTime() - now.getTime() <= 3600000) {
      // return 1 => 课程即将（在一小时内）开始
      return 1;
    } else {
      // return 2 => 课程还未开始
      return 2;
    }
  }

  timeToString(date) {
    const min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${date.getHours()}:${min}`;
  }

  courcesSort(a, b) {
    if (a.status === b.status) {
      return 0;
    } else if (b.status === -1 || b.status === 0) {
      return 1;
    } else {
      return a.status - b.status;
    }
  }

  fromNow(time) {
    return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
  }

  timestampFromNow(time) {
    return moment(time, "x").fromNow();
  }
}
