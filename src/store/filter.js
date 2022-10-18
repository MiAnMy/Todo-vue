import { ref } from "vue";
import { defineStore } from "pinia";

export const filterStore = defineStore("filter", () => {
  const filter = ref("all");

  const setFilter = value => (filter.value = value);

  const getFilter = () => filter.value;

  return {
    filter,
    getFilter,
    setFilter
  };
});
