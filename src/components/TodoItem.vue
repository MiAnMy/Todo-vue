<script setup>
import TodoButton from "./TodoButton.vue";
import ButtonRow from "./ButtonRow.vue";
import { todoStore } from "../store/todo";
const storeTodo = todoStore();

const props = defineProps({
  id: Number,
  done: Boolean,
  task: String
});
</script>

<template>
  <div class="todo__item" :class="done && 'todo__item--done'">
    <p class="todo__title">{{ task }}</p>
    <button-row>
      <todo-button icon="done" @click="storeTodo.doneTodo(id)" />
      <todo-button icon="delete" @click.once="storeTodo.removeTodo(id)" />
    </button-row>
  </div>
</template>

<style scoped>
.todo__item {
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  padding: 0.5rem;
}

.todo__item--done {
  --border-size: 4px;
  border-bottom: var(--border-size) solid var(--done);
  padding-bottom: calc(0.5rem - var(--border-size) + 1px);
}

.todo__title {
  flex: 1;
  font-size: 1.25rem;
  padding: 0.5rem;
  overflow-x: auto;
}
</style>
