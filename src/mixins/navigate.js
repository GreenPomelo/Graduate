import wepy from "wepy";

export default class NavigateMixin extends wepy.mixin {
  methods = {
    navigateTo(url) {
      const pageStatus = JSON.parse(wepy.getStorageSync(`pageStatus`));
      // 没有 pageStatus
      if (pageStatus === "") {
        wepy.navigateTo({ url });
      }
      if (pageStatus[url] === false) {
        wepy.navigateTo({ url: `close` });
      } else {
        wepy.navigateTo({ url });
      }
    }
  };
}
