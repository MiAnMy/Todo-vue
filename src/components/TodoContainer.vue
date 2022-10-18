<script setup></script>

<template>
  <div class="todo__container">
    <slot></slot>
  </div>
</template>

<style scoped>
.todo__container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
}
</style>
