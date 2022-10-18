<script setup>
import { ref } from "vue";
import TodoButton from "./TodoButton.vue";
import { todoStore } from "../store/todo";

const storeTodo = todoStore();
const task = ref();

const submitTask = () => {
  if (task.value === undefined) return;
  storeTodo.addTodo(task.value);
  task.value = "";
};
</script>

<template>
  <div class="todo__add">
    <input
      spellcheck="false"
      class="todo__input"
      type="text"
      placeholder="Add Task"
      v-model="task"
    />
    <todo-button @click="submitTask" icon="add" />
  </div>
</template>

<style scoped>
.todo__add {
  display: flex;
  gap: 5px;
}

.todo__input {
  border: 0;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border);
  color: var(--color);
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  width: 100%;
}
</style>
