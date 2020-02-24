<template>
  <div class="toggler-container">
    <button
      id="custom-toggler"
      :class="{active: isToggleActive, inactive: !isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event);"
      @mouseover="hoverClass = true;"
      @mouseleave="hoverClass = false;"
    >
      <div
        id="toggler-top"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-middle"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-bottom"
        :class="{hover: hoverClass}"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggleActive: false,
      hoverClass: false,
    };
  },
  methods: {
    handleToggle() {
      this.isToggleActive = !this.isToggleActive;
      this.$emit("toggleNavigation", this.isToggleActive);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/global.scss";

#custom-toggler {
    background: none;
    border: none;
    position: fixed;
    top: 20px;
    right: 30px;
    z-index: 99999;
    padding: 5px;
    border-radius: 3px;
    transform: none;
    opacity: 1;
    cursor: pointer;
    div {
        width: 32px;
        height: 2px;
        margin-bottom: 8px;
        background-color: $red;
        transition: transform 500ms $easing, opacity 500ms;
        will-change: transform, opacity;
    }
    #toggler-top {
        margin-top: 4px;
    }
    #toggler-bottom {
        margin-bottom: 4px;
    }
}
.active {
    #toggler-top {
        transform: translateY(10px) rotate(-135deg);
    }
    #toggler-middle {
        opacity: 0;
        transform: rotate(135deg);
    }
    #toggler-bottom {
        transform: translateY(-10px) rotate(-45deg);
    }
}
.hover {
    background-color: $lightblue !important;
    transition: 0.2s ease;
}
@media (max-width: $S) {
    #custom-toggler {
        right: 12px;
        div {
            width: 30px;
        }
    }
}
</style>
