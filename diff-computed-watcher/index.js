/*
  ウォッチャーで実装
  const app = new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: '',
      fullName: ''
    },
    watch: {
      firstName: function(value) {
        this.fullName = value + ' ' + this.lastName;
      },
      lastName: function(value) {
        this.fullName = this.firstName + ' ' + value;
      }
    }
  });
*/

// Computedが使える時はそのほうが単純
const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: ''
  },
  computed: {
    funllName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});
