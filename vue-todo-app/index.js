const app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function(event) {
      if (this.newItem === "") return;
      const newTodo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(newTodo);
      this.newItem = "";
    }
  }
});
