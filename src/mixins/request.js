import wepy from "wepy";

/* eslint-disable */
const timeout = (ms, url) =>
  new Promise((_, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject(`url: ${url}\nTimed out in ${ms} ms.`);
    }, ms);
  });
/* eslint-enable */

export default class CardMixin extends wepy.mixin {
  retryableRequest(config, ms = 3000) {
    let promiseResolve;
    let ret = new Promise(resolve => {
      promiseResolve = resolve;
    });
    Promise.race([timeout(ms, config.url), wepy.request(config)])
      .then(res => {
        const {
          data: { success, ...err }
        } = res;
        if (success) {
          promiseResolve(res);
        } else {
          console.error(err);
          promiseResolve(this.retryableRequest(config));
        }
      })
      .catch(e => {
        console.error(e);
        promiseResolve(this.retryableRequest(config));
      });
    return ret;
  }
}
