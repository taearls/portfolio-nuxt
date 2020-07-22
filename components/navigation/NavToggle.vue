<template>
  <!-- <div class="toggler-container">
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
  </div> -->
  <div class="fixed top-0 right-0 z-10 float-right p-4 h-16 sm:float-none sm:static">
    <button
      id="custom-toggler"
      class="pt-1 px-1 rounded-sm"
      style="margin-top: -0.2rem;"
      :class="{active: isToggleActive, inactive: !isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event);"
      @mouseover="hoverClass = true;"
      @mouseleave="hoverClass = false;"
    >
      <div
        id="toggler-top"
        class="bg-purple-600"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-middle"
        class="bg-purple-600"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-bottom"
        class="bg-purple-600"
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
      hoverClass: false
    };
  },
  computed: {
    bodyTopMargin() {
      const navContainer = document.getElementById("nav-container");
      const navHeight = navContainer.offsetHeight;
      let margin = navHeight + 4 + "px";
      return margin;
    }
  },
  created() {
    window.addEventListener("resize", this.adjustBodyTopMargin);
  },
  destroyed() {
    window.removeEventListener("resize", this.adjustBodyTopMargin);
  },
  methods: {
    handleToggle() {
      this.isToggleActive = !this.isToggleActive;
      this.adjustBodyTopMargin();
      this.$emit("toggleNavigation", this.isToggleActive);
    },
    adjustBodyTopMargin() {
      this.$nextTick(() => {
          if (this.isToggleActive && window.innerWidth < 640) {
          document.body.style.marginTop = this.bodyTopMargin;
        } else {
          document.body.style.marginTop = "4.25rem"; // horizontal navHeight is 4rem (64px)
        }
      });
    },
  },
};
</script>

<style>
/*

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
} */
#custom-toggler > div {
  width: 32px;
  height: 2px;
  margin-bottom: 8px;
  transition: transform 500ms ease, opacity 500ms;
  will-change: transform, opacity;
}
#toggler-top {
  margin-top: 4px;
}
#toggler-bottom {
  margin-bottom: 4px;
}
.active #toggler-top {
  transform: translateY(10px) rotate(-135deg);
}
.active #toggler-middle {
  opacity: 0;
  transform: rotate(135deg);
}
.active #toggler-bottom {
  transform: translateY(-10px) rotate(-45deg);
}
.hover {
  background-color: black !important;
  transition: 0.2s ease;
}
</style>
