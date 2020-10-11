<template>
  <span>
    <span
      v-show="errorPresent"
      class="block my-2 text-red-600 font-normal leading-6"
    >
      {{ errorMessage }}
    </span>
    <span
      v-show="!errorPresent"
      class="block my-2 text-green-700 dark:text-green-400 font-normal leading-6"
      :class="{'success-message': successMessage.length > 0}"
    >
      {{ successMessage }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    errorMessage: {
      default: "Error found. Please try again.",
      type: String,
    },
    errorPresent: {
      default: false,
      type: Boolean,
    },
    successMessage: {
      default: "Success!",
      type: String,
    },
  },
});
</script>
