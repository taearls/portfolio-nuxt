<template>
    <nav>
        <p v-for="(section,index) in sections"
            :key="index">
            {{section}}
        </p>
    </nav>
</template>

<script>
import sections from '@/data/portfolio-sections.json';

export default {
    data() {
        return {
            sections: sections
        }
    }
}
</script>

<style lang="scss" scoped>
    p {
        padding: 30px;
        padding-bottom: 0;
        margin: 0;
    }
</style>