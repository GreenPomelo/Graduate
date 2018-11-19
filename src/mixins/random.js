import wepy from "wepy";

export default class TimeMixin extends wepy.mixin {
  randomInt(min, max = 0) {
    if (max === 0) {
      max = min;
      return Math.floor(Math.random() * max);
    }
    return Math.floor(Math.random() * (max - min) + min);
  }
}
