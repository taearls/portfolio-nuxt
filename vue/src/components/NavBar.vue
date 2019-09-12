<template>
    <nav>
        <img id="headshot" alt="Tyler Earls Headshot" src="assets/headshot.jpg" />
        <ul>
            <li v-for="(section, index) in sections"
            :key="index">
                <a 
                    class="bold" 
                    :href="section.href">
                    {{section.name}}
                </a>
            </li>
        </ul>
        <div class="social-container">
            <a class="social-link" href="https://www.linkedin.com/in/tylerearls" target="_blank">
                <span>
                    <i class="fab fa-linkedin"></i>
                </span>
            </a>
            <a class="social-link" href="https://www.github.com/tboneearls" target="_blank">
                <span>
                    <i class="fab fa-github"></i>
                </span>
            </a>
            <a class="social-link" href="https://www.twitter.com/taearls" target="_blank">
                <span>
                    <i class="fab fa-twitter"></i>
                </span>
            </a>
        </div>
    </nav>
</template>

<script>
import sectionData from '@/data/portfolio-sections.json';

export default {
    data() {
        return {
            sections: sectionData
        }
    }
}
</script>

<style lang="scss">
@import "src/scss/global.scss";

nav {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.9;
    background-color: $black;
    width: $navWidth;
    height: 100%;
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
.social-container {
    margin: 0 20px;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.social-link {
    color: white;
    height: 38px;
    width: 38px;
    &:hover {
        color: white;
    }
    span {
        background-color: $red;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        // border: 1px solid transparent;
        padding: .35rem .7rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:hover {
            background-color: $lightblue;
            transition: background-color 0.2s ease;
        }
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