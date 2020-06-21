<template>
  <div>
    <h1>Web Projects</h1>
    <br>
    <web-project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      :index="index"
      :project-count="projects.length - 1"
    />
  </div>
</template>

<script>
import WebProject from "../../components/WebProject.vue";

const projects = [{
  name: "Road Ranger",
  description: "A header with navigation that I built while freelancing for <a href='https://trekk.com' rel='noreferrer' target='_blank'>Trekk</a>. Both the mobile and desktop versions are based on designs they prepared for the client and had me fulfill.",
  cloudinaryID: "screenshots/roadranger-screenshot.jpg",
  href: "https://www.roadrangerusa.com",
  tagline: "Check it out! ⛽",
  customCursor: false,
  cursorStyle: "pointer",
}, {
  name: "Space Clones",
  description: "An original space shooting video game inspired by Space Invaders, the 1978 arcade classic. Defeat the clone army and then their mothership to advance to the next level. If you get a high enough score, you can earn extra lives. Play solo, or take turns with a friend. The galaxy is yours to save from the invading clone army! Created using HTML5, CSS3, JavaScript, and jQuery.",
  cloudinaryID: "screenshots/space-clones-screenshot.png",
  href: "https://space-clones.netlify.com",
  tagline: "See if you can beat my high score! 😉",
  customCursor: true,
  cursorStyle: "url(images/space-clones-cursor.png), pointer",
}, {
  name: "BigSearch",
  description: "An application inspired by the movie Big that interacts with the Open Movie Database (OMDB) REST API to return data about any movie, similar to the website, IMDB. Built using React and React Router, hosted on Heroku. To use the app, simply type the name of any movie into the search form.",
  cloudinaryID: "screenshots/big-search-screenshot.png",
  href: "https://bigsearch.herokuapp.com",
  tagline: "Search your favorite movie!",
  customCursor: false,
  cursorStyle: "pointer",
}];

export default {
  components: {
    WebProject,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
