var vm = new Vue({
	el: "#app",
  data: {
  	message: 'Hello Vue.js!',
    count: 10,
    user: {
    	lastName: 'Sano',
      firstName: 'Suguru',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue']
  }
})
