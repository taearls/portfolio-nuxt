<template>
    <div>
        <br/>
        <web-project
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :projectCount="projects.length - 1"/>
    </div>
</template>

<script>
import ProjectData from '@/data/web-projects.json';

import WebProject from './WebProject.vue';

export default {
    data() {
        return {
            projects: ProjectData,
        }
    },
    components: {
        WebProject
    }
}
</script>

<style lang="scss">

</style>