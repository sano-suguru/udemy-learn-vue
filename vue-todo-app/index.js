const app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function(event) {
      const newTodo = {
        item: this.newItem
      };
      this.todos.push(newTodo);
    }
  }
});
