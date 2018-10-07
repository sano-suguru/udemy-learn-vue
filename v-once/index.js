const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    handleClick: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
