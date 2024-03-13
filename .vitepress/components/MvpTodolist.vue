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
    return this.todos;
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
    return this.todos;
  }
}
// 视图
class TodoView {
  input;
  addTodoButton;
  todoList2;
  constructor() {
    this.input = document.getElementById("todoInput2");
    this.addTodoButton = document.getElementById("addBtn2");
    this.todoList2 = document.getElementById("todoList2");
  }
  addTodoHandler(handler) {
    this.addTodoButton.onclick = handler;
  }

  removeTodoHandler(handler) {
    this.todoList2.onclick = handler;
  }
  render(todos) {
    this.todoList2.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${todo} <button class="delete" data-index=${index}>删除</button>`;
      todoList2.appendChild(li);
    });
  }
}
// 控制器
class TodoPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addTodoHandler(() => this.addTodo());
    this.view.removeTodoHandler((event) => this.removeTodo(event));
  }
  addTodo () {
    const todoText = this.view.input.value.trim();
    if (todoText) {
      const newTodos = this.model.addTodo(todoText);
      this.view.input.value = '';
      this.view.render(newTodos);
    }
  }
  removeTodo(event) {
    if (event.target.className === 'delete') {
      const index = parseInt(event.target.dataset.index);
      const newTodos = this.model.removeTodo(index);
      this.view.render(newTodos);
    }
  }
}

onMounted(() => {
  const model = new TodoModel();
  const view = new TodoView();
  new TodoPresenter(model, view);
})
</script>

<template>
  <div>
    <input type="text" id="todoInput2" placeholder="请输入待办事项2" />
    <button id="addBtn2">添加</button>
    <ul id="todoList2"></ul>
  </div>
</template>
