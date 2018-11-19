import wepy from "wepy";

export default class courseTimeMixin extends wepy.mixin {
  getCourseTime() {
    const courseTimes = [
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
        end: { hour: 19, min: 15 }
      },
      {
        section: 11,
        start: { hour: 19, min: 20 },
        end: { hour: 20, min: 5 }
      },
      {
        section: 12,
        start: { hour: 20, min: 10 },
        end: { hour: 21, min: 5 }
      }
    ];
    return courseTimes;
  }
}
