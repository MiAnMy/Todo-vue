<script setup>
import TodoAdd from "./TodoAdd.vue";
import TodoContainer from "./TodoContainer.vue";
import TodoFilters from "./TodoFilters.vue";
import TodoItem from "./TodoItem.vue";
import { todoStore } from "../store/todo";

const storeTodo = todoStore();
</script>

<template>
  <div class="todo">
    <todo-add />
    <todo-filters />
    <todo-container>
      <template v-for="todo in storeTodo.filtered">
        <todo-item
          v-if="todo.visible"
          :task="todo.task"
          :done="todo.done"
          :id="todo.id"
        />
      </template>
    </todo-container>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  width: min-content;
  padding: 10px;
  gap: 10px;
  margin: 25px auto;
  width: 25rem;
  box-sizing: border-box;
  max-height: calc(100vh - 50px);
}
</style>
