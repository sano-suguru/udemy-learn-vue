Vue.filter("toUSD", function(jpy) {
  return jpy / 100;
});

Vue.filter("numberFormat", function(value) {
  return value.toLocaleString();
});

const app = new Vue({
  el: "#app",
  data: {
    jpyPrice: 298000000
  }
});
