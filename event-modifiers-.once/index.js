const app = new Vue({
  el: "#app",
  data: {
    message: ""
  },
  methods: {
    handleClick: function() {
      this.message = new Date().toLocaleTimeString();
    }
  }
});
