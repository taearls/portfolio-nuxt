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

<script>
export default {
  data() {
    return {
      toggledOn: false,
    };
  },
}
</script>