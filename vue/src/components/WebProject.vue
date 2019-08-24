<template>
    <section>
        <h4 data-aos="zoom-in-left" class="project-title">{{project.name}}</h4> 
        <p data-aos="fade-in" data-aos-duration="1600" class="project-description">{{project.description}}</p> 

        <!-- BIGSEARCH TAGLINE -->
        <!-- <p data-aos="fade-in" data-aos-duration="1600"> -->
            <a :href="project.href" 
            class="portfolio-link" 
            :class="{ 'link-hover': hover }"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            target="_blank">{{project.tagline}}</a>
        <!-- </p> -->

        <!-- BIGSEARCH LINK -->
        <a :href="project.href" class="portfolio-link" target="_blank"> 
            <img 
                data-aos="fade-in" 
                data-aos-duration="2000" 
                data-aos-anchor-placement="top-bottom"
                class="portfolio-screenshot"
                :src="`${publicPath}${project.screenshot}`" 
                :alt="`${project.name} Screenshot`"
                :style="{cursor: cursorStyle}"/>
        </a> 
        <br/> <br/>

        <hr data-aos="zoom-in" data-aos-duration="600" class="line-break" v-if="project.index !== projectCount"/> 
        <br/>
    </section>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        cursorStyle: function() {
            if (this.project.customCursor) {
                return `url(${this.project.cursorStyle}), pointer`;
            }
            return "pointer";
        }
    },
    methods: {
        getScreenShotUrl: function() {
            return this.project.screenshot;
        },
    },
    props: ['project', 'projectCount'],

}
</script>

<style lang="scss" scoped>
    @import 'src/scss/global.scss';
    
    .portfolio-link {
        display: block;
        color: $red;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .link-hover {
        text-decoration: none;
        color: $lightblue;
        transition: 0.3s ease;
    }
    .portfolio-screenshot {
        margin-top: 10px;
        max-width: 75vw;
        height: auto;
    }
    .project-title, .skill-title {
        margin-bottom: 10px;
        font-weight: bold;
        color: $red;
        text-align: center;
    }
    .project-description {
        margin-bottom: 10px;
    }
</style>