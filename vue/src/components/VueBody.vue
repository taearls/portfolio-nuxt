<template>
    <div id="main-body">
        <About />
        <web-project
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :projectCount="projects.length - 1"
        />
        <Contact />
        <vue-footer />
    </div>
</template>

<script>
import ProjectData from '@/data/web-projects.json';

import About from '@/components/body/About.vue';
import Contact from '@/components/body/Contact.vue';
import WebProject from '@/components/body/WebProject.vue';
import VueFooter from '@/components/body/VueFooter.vue';

export default {
    data() {
        return {
            projects: ProjectData,
        }
    },
    components: {
        About,
        Contact,
        WebProject,
        VueFooter
    },
}
</script>
<style lang="scss">
    @import 'src/scss/global.scss';
    #main-body {
        background: linear-gradient($darkblue, $darkpurple, $darkblue) !important;
        background-color: $darkblue !important;
    }
       
</style>
