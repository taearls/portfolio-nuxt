<template>
    <div>
        <WebProject 
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :projectCount="projects.length - 1"
        />
        <Contact />
        <VueFooter />
    </div>
</template>

<script>
import ProjectData from '@/data/web-projects.json';

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
        Contact,
        WebProject,
        VueFooter
    },
}
</script>
<style lang="scss" scoped>
    @import 'src/scss/global.scss';

</style>
