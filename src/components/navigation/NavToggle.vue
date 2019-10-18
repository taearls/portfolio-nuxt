<template>
    <div>
        <button id="custom-toggler"
            :class="{active: toggleActive, inactive: !toggleActive}"
            @click="handleToggle();"
            :aria-label="`${toggleActive ? 'Close Navigation' : 'Open Navigation'}`"
            @mouseover="hoverClass = true;"
            @mouseleave="hoverClass = false;">
            
            <div id="toggler-top"
                :class="{hover: hoverClass}"></div>
            <div id="toggler-middle"
                :class="{hover: hoverClass}"></div>
            <div id="toggler-bottom"
                :class="{hover: hoverClass}"></div>
            
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggleActive: false,
            hoverClass: false
        }
    },
    methods: {
        handleToggle: function() {
            this.$emit('toggle');
            this.toggleActive = !this.toggleActive;
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/global.scss';

#custom-toggler {
    background: none;
    border: none;
    position: fixed;
    top: 10px;
    transition: left 500ms $easing;
    z-index: 1000;
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
}
.inactive {
    left: 10px;
}
.active {
    left: calc(#{$largeNav} - 50px);
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
@media (max-width: $M) {
    #custom-toggler div {
        width: 30px;
    }
    .inactive {
        left: 7px;
    }
    .active {
        left: calc(#{$largeNav} - 82px);
    }
}
@media (max-width: $S) {
    #custom-toggler div {
        width: 27px;
    }
    .inactive {
        left: 5px;
    }
    .active {
        left: calc(#{$largeNav} - 100px);
    }
}
</style>