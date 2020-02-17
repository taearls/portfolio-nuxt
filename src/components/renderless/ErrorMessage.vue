<template>
  <span>
    <span
      v-show="errorPresent"
      class="error-message"
    >
      {{ errorMessage }}
    </span>
    <span
      v-show="!errorPresent"
      class="error-placeholder"
      :class="{'success-message': successMessage}"
    >
      {{ successMessage || "" }}
    </span>

  </span>
</template>

<script>
export default {
  props: {
    errorMessage: {
      default: "Error found. Please try again.",
      type: String,
    },
    errorPresent: {
      type: Boolean,
    },
    successMessage: {
      default: "Success!",
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/scss/global.scss';

.error-placeholder, .error-message, .success-message {
    display: block;
    margin-left: initial;
    margin-right: initial;
    margin-bottom: 15px;
    margin-top: -5px;
    font-size: 15px;
    font-weight: 400;
    color: $red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: fit-content;
}

</style>
