const app = new Vue({
  el: "#app",
  data: {
    colors: [{ name: "Red" }, { name: "Green" }, { name: "Blue" }]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log("Update!");
        console.log(
          "new: %s, old: %s",
          JSON.stringify(newValue, null, "\t"),
          JSON.stringify(oldValue, null, "\t")
        );
      },
      deep: true,
      immediate: true // 初期読み込み時にもフックされる
    }
  }
});
