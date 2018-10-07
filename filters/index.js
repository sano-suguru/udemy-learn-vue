const app = new Vue({
  el: "#app",
  data: {
    price: 2980000000
  },
  filters: {
    numberFormat: function(value) {
      return value.toLocaleString();
    }
  }
});
