<template>
    <nav>
        <!-- <h2>Tyler Earls</h2>
        <h3>Software Engineer</h3>
        <img id="headshot" alt="Tyler Earls Headshot" src="assets/headshot.jpg" /> -->
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
        <!-- <social-media-icons></social-media-icons> -->
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

<style lang="scss" scoped>
@import "src/scss/global.scss";

.highlighted {
    color: $lightblue;
}
a {
    font-size: 20px;
    padding: 3px 7px;
}
#headshot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    max-width: calc(#{$largeNav} - 30px); // 266 by 266px is the file size, so it shouldn't be any bigger than that
    max-height: calc(#{$largeNav} - 30px);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
}
@media (max-width: $M) {
  #headshot {
    max-width: calc(#{$mediumNav} - 30px); // 266 by 266px is the file size, so it shouldn't be any bigger than that
    max-height: calc(#{$mediumNav} - 30px);
  } 
}
@media (max-width: $S) {
  #headshot {
    max-width: calc(#{$smallNav} - 30px); // 266 by 266px is the file size, so it shouldn't be any bigger than that
    max-height: calc(#{$smallNav} - 30px);
  } 
}
</style>