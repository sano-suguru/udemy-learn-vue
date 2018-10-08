const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!"
  },
  // キャッシュされる
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
