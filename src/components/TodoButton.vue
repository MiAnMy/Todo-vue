<script setup>
const props = defineProps({
  icon: { type: String, required: true }
});
</script>

<template>
  <button class="todo__button">
    <span class="material-symbols-outlined"> {{ props.icon }} </span>
  </button>
</template>

<style scoped>
.todo__button {
  display: flex;
  align-items: center;
  padding: 0.25rem;
  color: var(--color);
  background-color: var(--background-color);
  cursor: pointer;
  border: 0;
}

.todo__button:hover {
  opacity: 0.8;
}
</style>
