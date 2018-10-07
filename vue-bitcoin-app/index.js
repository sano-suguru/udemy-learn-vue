const app = new Vue({
  el: "#app",
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.bpi = response.data.bpi;
      })
      .catch(error => {
        this.hasError = true;
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2);
    }
  }
});
