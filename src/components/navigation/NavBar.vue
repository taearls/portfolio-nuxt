<template>
    <nav>
        <ul>
            <li v-for="(section, index) in sections"
            :key="index">
                <router-link
                    :to="section.href"
                    tabindex="0">
                    {{section.name}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import sections from '@/data/portfolio-sections.json';

export default {
    data() {
        return {
            sections
        }
    },
}
</script>

<style lang="scss" scoped>
@import "src/scss/global.scss";

a {
    font-size: 20px;
    padding: 0px 5px;
}
#headshot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
}
@media (max-width: $S) {
    nav {
        ul {
            margin-right: 50px;
            li {
                padding: 0 2px !important; 
            }
        }
    }
    // @media (max-width: $M) {
    // nav {
    //     ul {
    //         margin-right: 50px;
    //         li {
    //             margin: 0 5px !important; 
    //         }
    //     }
    // }
}
</style>