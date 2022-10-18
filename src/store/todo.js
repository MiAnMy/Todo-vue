import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { filterStore } from "./filter";

export const todoStore = defineStore("todo", () => {
  const storeFilter = filterStore();
  const list = ref([]);

  const addTodo = task => {
    const newTask = {
      id: list.value.length + 1,
      task,
      done: false,
      visible: true
    };

    list.value = [...list.value, newTask];
  };

  const removeTodo = id => {
    list.value = list.value.map(todo => {
      if (todo.id === id) todo.visible = false;
      return todo;
    });
  };

  const doneTodo = id => {
    list.value = list.value.map(todo => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
  };

  const filtered = computed(() => {
    const filter = storeFilter.getFilter();
    switch (filter) {
      case "todo":
        return list.value.filter(todo => todo.done === false && todo);
      case "done":
        return list.value.filter(todo => todo.done === true && todo);
      default:
        return list.value;
    }
  });

  return {
    list,
    filtered,
    addTodo,
    removeTodo,
    doneTodo
  };
});
