<template>
    <div>
        <div id="custom-toggler"
            :class="{active: toggleActive}"
            @click="handleToggle();"
            @mouseover="hoverClass = true;"
            @mouseleave="hoverClass = false;">
            
            <div id="toggler-top"
                :class="{hover: hoverClass}"></div>
            <div id="toggler-middle"
                :class="{hover: hoverClass}"></div>
            <div id="toggler-bottom"
                :class="{hover: hoverClass}"></div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggleActive: true,
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
        position: fixed;
        top: 10px;
        left: 15px;
        transition: left 500ms $easing;
        z-index: 1000;
        padding: 5px;
        border-radius: 3px;
        transform: none;
        opacity: 1;
        cursor: pointer;
        div {
            width: 35px;
            height: 2px;
            margin-bottom: 8px;
            background-color: $red;
            transition: transform 500ms $easing, opacity 500ms;
            will-change: transform, opacity;
        }
        &:focus {
            border: none;
            outline: none;
        }
    }
    .active {
        left: calc(#{$navWidth} - 50px) !important;
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
</style>