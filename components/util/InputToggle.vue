<template>
  <div
    class="relative inline-block w-10 h-auto mr-2 align-middle select-none transition duration-800 ease-in"
  >
    <input
      id="darkModeToggle"
      type="checkbox"
      :checked="toggledOn"
      name="darkModeToggle"
      class="toggle-checkbox focus:outline-none dark:border-purple-400"
      @click="toggledOn = !toggledOn"
    >
    <label
      for="darkModeToggle"
      class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-400 cursor-pointer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      toggledOn: false,
    };
  },
});
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply right-0;
}
.toggle-checkbox {
  @apply absolute inline-block align-middle w-5 h-5 border-2 border-gray-400 rounded-full bg-white appearance-none cursor-pointer;
  right: 1.25rem;
  transition: right 0.4s ease;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-purple-400;
}
</style>
