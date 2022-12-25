const app = {
    data() {
        return {
            todoItem: "",
            todoList: []
        }
    },

    methods: {
        captureTodo(event) {
            this.todoItem = event.target.value;
        },
        addToList() {
            if (this.todoItem) {
                this.todoList.push(this.todoItem);
                this.todoItem = "";
            }
        },
        deleteFromList(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        }
    }
}


Vue.createApp(app).mount("#todoApp");