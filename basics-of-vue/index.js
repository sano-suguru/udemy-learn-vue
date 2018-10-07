const app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
    url: "https://jp.vuejs.org",
    toggle: true,
    languages: ["JavaScript", "Ruby", "Python"]
  },
  methods: {
    handleClick: function() {
      this.message = "Clicked!";
    }
  }
});
