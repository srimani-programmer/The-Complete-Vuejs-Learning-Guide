const todoSubmitElement = document.querySelector("#todo-item-submit");
const todoItemElement   = document.querySelector("#todo-item");

function addTodoItemWithKeyPress(event) {
  if (event.key === "Enter") {
    addTodoItem();
  }
}

function addTodoItem() {
  const todoItem = todoItemElement.value;

  if (todoItem === undefined || todoItem === "") {
    alert("Todo Item Should not be empty.");
  } else {
    const todoItems = document.querySelector(".todo-items ul");

    const todoElement = document.createElement("li");
    todoElement.textContent = todoItem;
    todoItems.appendChild(todoElement);
    todoItemElement.value = "";
  }
}

function performAction() {
  todoSubmitElement.addEventListener("click", addTodoItem);
  todoItemElement.addEventListener("keypress", addTodoItemWithKeyPress);
}
document.addEventListener("DOMContentLoaded", performAction);
