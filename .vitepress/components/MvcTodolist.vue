<script setup>
import { onMounted } from "vue";
// 模型
class TodoModel {
  todos = [];
  constructor() {
    this.todos = [];
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}
// 视图
class TodoView {
  input;
  addTodoButton;
  todoList;
  constructor() {
    this.input = document.getElementById("todoInput");
    this.addTodoButton = document.getElementById("addBtn");
    this.todoList = document.getElementById("todoList");
    this.input.focus();

  }
  render(todos) {
    this.todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${todo} <button class="delete" data-index=${index}>删除</button>`;
      todoList.appendChild(li);
    });
  }
}
// 控制器
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addTodoButton.addEventListener('click', () => this.addTodo());
    this.view.todoList.addEventListener('click', (event) => this.removeTodo(event));
  }
  addTodo () {
    const todoText = this.view.input.value.trim();
    if (todoText) {
      this.model.addTodo(todoText);
      this.view.input.value = '';
      this.view.input.focus();
      this.view.render(this.model.todos);
    }
  }
  removeTodo(event) {
    if (event.target.className === 'delete') {
      const index = parseInt(event.target.dataset.index);
      this.model.removeTodo(index);
      this.view.render(this.model.todos);
    }
  }
}

onMounted(() => {
  const model = new TodoModel();
  const view = new TodoView();
  new TodoController(model, view);
})
</script>

<template>
  <div>
    <input type="text" id="todoInput" placeholder="请输入待办事项" />
    <button id="addBtn">添加</button>
    <ul id="todoList"></ul>
  </div>
</template>

<style module>
input {
  border: 1px solid #000;
  width: 400px;
  margin-right: 10px;
}
button {
  border: 1px solid #ccc;
  padding: 0px 10px;
}
</style>
