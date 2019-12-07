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
import WebProject from './WebProject.vue';

export default {
    data() {
        return {
            projects: [{
                "name": "Road Ranger",
                "index": 0,
                "description": "A header with navigation that I built while freelancing for <a href='https://trekk.com' rel='noreferrer' target='_blank'>Trekk</a>. Both the mobile and desktop versions are based on designs they prepared for the client and had me fulfill.",
                "screenshot": "assets/screenshots/roadranger-screenshot.jpg",
                "href": "https://www.roadrangerusa.com",
                "tagline": "Check it out! ⛽",
                "customCursor": false,
                "cursorStyle": "pointer"
            }, {
                "name": "Space Clones",
                "index": 1,
                "description": "An original space shooting video game inspired by Space Invaders, the 1978 arcade classic. Defeat the clone army and then their mothership to advance to the next level. If you get a high enough score, you can earn extra lives. Play solo, or take turns with a friend. The galaxy is yours to save from the invading clone army! Created using HTML5, CSS3, JavaScript, and jQuery.",
                "screenshot": "assets/screenshots/space-clones-screenshot.jpg",
                "href": "https://tboneearls.github.io/space_clones",
                "tagline": "See if you can beat my high score! 😉",
                "customCursor": true,
                "cursorStyle": "assets/cursors/space-clones-cursor.png"
            }, {
                "name": "BigSearch",
                "index": 2,
                "description": "An application inspired by the movie Big that interacts with the Open Movie Database (OMDB) REST API to return data about any movie, similar to the website, IMDB. Built using React and React Router, hosted on Heroku. To use the app, simply type the name of any movie into the search form.",
                "screenshot": "assets/screenshots/bigsearch-screenshot.jpg",
                "href": "https://bigsearch.herokuapp.com",
                "tagline": "Search your favorite movie!",
                "customCursor": false,
                "cursorStyle": "pointer"
            }],
        }
    },
    components: {
        WebProject
    }
}
</script>

<style lang="scss">

</style>