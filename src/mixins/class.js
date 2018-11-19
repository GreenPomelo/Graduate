import wepy from "wepy";

export default class ClassMixin extends wepy.mixin {
  getColor(allcourses) {
    let colorArr = [
      "#7ae27f",
      "#64baff",
      "#f5ab47",
      "#f7d745",
      "#d578db",
      "#f58495",
      "#e58271",
      "#7a84e3",
      "#b891e7",
      "#58d5a8",
      "#a9d93c",
      "#f2aa76",
      "#7ae1e2",
      "#7ae27f",
      "#64baff"
    ];
    let useColors = [];
    colorArr.forEach((value, index) => {
      if (index < allcourses.length) {
        useColors.push(value);
      }
    });
    for (let i of allcourses) {
      let randomNumber = parseInt(Math.random() * useColors.length);
      i.bgc = useColors[randomNumber];
      useColors.splice(randomNumber, 1);
    }
  }
  handleCourses(inputCourse, chosenWeek) {
    let allcourse = inputCourse;
    this.getColor(allcourse);
    let dailyCourse = [];
    let toDealCourse = [];
    let elseCourse = [];
    let nowCourse = [];
    let unshowCourse = [];
    for (let i = 0; i < 7; i++) {
      dailyCourse.push([]);
      toDealCourse.push([]);
      elseCourse.push([]);
      nowCourse.push([]);
      unshowCourse.push([]);
    }
    for (let i of allcourse) {
      dailyCourse[parseInt(i.day - 1)].push(i);
      let weekarr = i.weekarr;
      i.elementHeight =
        parseInt(i.sectionend - i.sectionstart + 1) * 111 + "rpx";
      i.elementTop = parseInt((i.sectionstart - 1) * 118 + 78) + "rpx";
      i.opacity = 1;
      if (weekarr.indexOf(chosenWeek) === -1) {
        unshowCourse[~~(i.day - 1)].push(i);
      } else {
        toDealCourse[~~(i.day - 1)].push(i);
      }
    }
    for (let i in toDealCourse) {
      let courseStart = [];
      let courseEnd = [];
      for (let j of toDealCourse[i]) {
        if (
          courseStart.indexOf(j.sectionstart) === -1 &&
          courseEnd.indexOf(j.sectionend) === -1
        ) {
          nowCourse[i].push(j);
          courseStart.push(j.sectionstart);
          courseEnd.push(j.sectionend);
        } else {
          elseCourse[i].push(j);
        }
      }
      courseStart = [];
      courseEnd = [];
    }
    return [nowCourse, elseCourse, unshowCourse];
  }
}
