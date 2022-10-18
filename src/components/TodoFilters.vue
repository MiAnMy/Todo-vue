<script setup>
import TodoRadio from "./TodoRadio.vue";
import ButtonRow from "./ButtonRow.vue";
import { ref, watch } from "vue";
import { filterStore } from "../store/filter";
const storeFilter = filterStore();
const filter = ref(storeFilter.getFilter());

watch(filter, () => {
  storeFilter.setFilter(filter.value);
});
</script>

<template>
  <button-row>
    <todo-radio value="all" v-model="filter" />
    <todo-radio value="todo" v-model="filter" />
    <todo-radio value="done" v-model="filter" />
  </button-row>
</template>

<style scoped>
.filter__radios {
  display: flex;
}
</style>
