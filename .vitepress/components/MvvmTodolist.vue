<script setup>
import { ref } from "vue";

const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value);
    newTodo.value = '';
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <div>
    <input type="text" v-model="newTodo" placeholder="请输入待办事项3" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">删除</button>
      </li>
    </ul>
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
