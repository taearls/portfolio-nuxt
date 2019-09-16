<template>
    <section id="landing-body">
        <p>Hi, I'm <span class="important">Tyler Earls</span>. I'm a software engineer and songwriter.</p>
        <br/>
        <button @click="enterMainWebsite();">Enter</button>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        enterMainWebsite: function() {
            this.$emit('websiteEntered');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/scss/global.scss";

#landing-body {
    display: table-cell;
    vertical-align: middle;
    background-color: $softblack;
    height: 100vh;
    width: 100vw;
    p {
        font-size: 36px;
        text-align: center;
        color: white;
        max-width: none;
        margin-top: auto;
        margin-bottom: auto;
    }
    .important {
        color: $red;
    }
    button {
        background-color: $black;
        // border: 1px solid $lightblack;
        color: $softwhite;
        font-size: 20px;
        border-radius: 3px;
        display: block;
        margin: 0 auto;
        text-align: center;
        &:hover {
            color: $red;
            cursor: pointer;
        }
    }
}

</style>