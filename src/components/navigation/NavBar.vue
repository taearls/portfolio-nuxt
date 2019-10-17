<template>
    <nav>
        <h2>Tyler Earls</h2>
        <h4>Software Engineer</h4>
        <img id="headshot" alt="Tyler Earls Headshot" src="assets/headshot.jpg" />
        <ul>
            <li v-for="(section, index) in sections"
            :key="index">
                <a 
                    class="bold" 
                    tabindex="0"
                    :href="section.href">
                    {{section.name}}
                </a>
            </li>
        </ul>
        <social-media-icons></social-media-icons>
    </nav>
</template>

<script>
import sectionData from '@/data/portfolio-sections.json';
import SocialMediaIcons from '@/components/widgets/SocialMediaIcons.vue';

export default {
    data() {
        return {
            sections: sectionData
        }
    },
    components: {
        SocialMediaIcons
    }
}
</script>

<style lang="scss">
@import "src/scss/global.scss";

.highlighted {
    color: $lightblue;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    background-color: $black;
    width: $navWidth;
    height: 100%;
    h2, h4 {
        color: $red;
        text-align: center;
    }
    h2 {
        margin-top: 10px;
    }
    h4 {
        margin-top: 3px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        margin-top: 20px;
        line-height: 1.5em;
        padding-left: 1em;
        color: $red;
    }
    li {
        margin-bottom: 10px;
    }
}
#headshot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    max-width: calc(#{$navWidth} - 30px); // 266 by 266px is the file size, so it shouldn't be any bigger than that
    max-height: calc(#{$navWidth} - 30px);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
}
</style>