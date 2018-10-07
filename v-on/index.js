const app = new Vue({
  el: "#app",
  data: {
    now: ""
  },
  methods: {
    onclick: function() {
      // alert("clicked!");
      this.now = new Date().toLocaleString();
    }
  }
});
