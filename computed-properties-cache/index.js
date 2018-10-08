const app = new Vue({
  el: "#app",
  computed: {
    computedNumber: function() {
      console.log("computed!");
      return Math.random();
    }
  },
  methods: {
    methodsNumber: function() {
      console.log("methods!");
      return Math.random();
    }
  }
});
