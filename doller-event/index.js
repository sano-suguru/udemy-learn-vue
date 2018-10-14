const app = new Vue({
  el: "#app",
  data: {
    message: ""
  },
  methods: {
    handleClick: function($event, message) {
      console.log($event);
      this.message = message;
    }
  }
});
