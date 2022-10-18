<script setup>
import { computed } from "vue";
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  modelValue: {
    type: String
  }
});

const cappValue = computed(
  () => props.value[0].toUpperCase() + props.value.slice(1)
);

const isChecked = computed(() => props.value === props.modelValue);
</script>

<template>
  <input
    class="filter__radio"
    type="radio"
    name="filters"
    :id="`btn_${value}`"
    :value="value"
    :checked="isChecked"
    @change="$emit('update:modelValue', value)"
  />
  <label class="filter__label" :for="`btn_${value}`">
    {{ cappValue }}
  </label>
</template>

<style scoped>
.filter__radio {
  display: none;
}

.filter__label {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.75rem;
  cursor: pointer;
}

.filter__label:hover {
  opacity: 0.8;
}

.filter__radio:checked + .filter__label {
  --border-size: 1px;
  border: var(--border-size) solid var(--border);
  padding: calc(0.75rem - var(--border-size));
}
</style>
