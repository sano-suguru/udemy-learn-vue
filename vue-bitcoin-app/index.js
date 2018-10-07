const app = new Vue({
  el: "#app",
  data: {
    bpi: null
  },
  mounted: function() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.bpi = response.data.bpi;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
