<template>
    <section id="web-projects">
        <h1 v-if="index === 0">Web Projects</h1>

        <h2 class="project-title">{{project.name}}</h2>
        <p class="project-description" v-html="project.description"></p>

        <a  class="portfolio-link"
            target="_blank"
            rel="noreferrer"
            :href="project.href"
            >{{project.tagline}}
        </a>

        <a  class="screenshot-link"
            rel="noreferrer"
            target="_blank"
            :href="project.href"
            :style="{cursor: cursorStyle}">
            <img
                rel="preload"
                class="portfolio-screenshot"
                :src="`${publicPath}${project.screenshot}`"
                :alt="`${project.name} Screenshot`"/>
        </a>
        <br/>

        <template v-if="index !== projectCount">
            <hr class="line-break" />
            <br/>
        </template>
    </section>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  props: ["project", "projectCount", "index"],
  computed: {
    cursorStyle() {
      if (this.project.customCursor) {
        return `url(${this.project.cursorStyle}), pointer`;
      }
      return "pointer";
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/scss/global.scss';

#web-projects {
    text-align: center;
}
h1 {
    margin-bottom: 20px;
}
.screenshot-link {
    display: inline-block;
}
.portfolio-link {
    padding: 0 20px;
    display: block;
    color: $red;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin-bottom: 5px;
}
.portfolio-screenshot {
    margin: 7px auto;
    height: auto;
    display: block;
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
.line-break {
    margin-top: 15px;
    border: 0;
    height: 1px;
    margin-left: 11vw;
    margin-right: 11vw;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), $red, rgba(0, 0, 0, 0));
}
</style>
