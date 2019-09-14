<template>
    <section id="landing-body">
        <p>Hi, I'm <span class="important">Tyler Earls</span>. I'm a software engineer and songwriter.</p>
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
        font-family: 'Press Start 2P', cursive;
        * {
            font-family: 'Press Start 2P', cursive;
        }
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
            margin: 0 auto;
            text-align: center;
        }
    }
    
    // p {
    //     color: white !important;
    // }
</style>