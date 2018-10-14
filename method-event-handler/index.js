const app = new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    handleClick: function() {
      this.counter++;
    }
  }
});
