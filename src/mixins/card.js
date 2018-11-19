import wepy from "wepy";

export default class CardMixin extends wepy.mixin {
  data = {
    isPressed: "",
    touched: false
  };

  methods = {
    async tap() {
      this.isPressed = "pressed";
      this.isPressed = await this.cardStatusRestore();
      this.$apply();
    },
    touchStart() {
      this.isPressed = "pressed";
      this.touched = true;
    },
    touchEnd() {
      this.isPressed = "";
      this.touched = false;
    }
  };

  cardStatusRestore() {
    if (!this.touched) {
      return new Promise(resolve => {
        setTimeout(() => resolve(""), 0);
      });
    }
  }
}
