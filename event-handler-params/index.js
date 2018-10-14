const app = new Vue({
  el: "#app",
  data: {
    message: ""
  },
  methods: {
    handleClick: function(message) {
      this.message = message;
    }
  }
});
