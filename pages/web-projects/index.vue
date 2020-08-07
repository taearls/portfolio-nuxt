<template>
  <div class="prose mx-auto max-w-none w-4/5 dark:text-white">
    <h1 class="text-center">
      Web Projects
    </h1>
    <p class="prose-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur, minus dolore provident ipsa magni quibusdam, quasi vel, commodi beatae repudiandae voluptate error dicta quam ratione asperiores! Fugiat, reprehenderit eveniet?
    </p>
    <web-project
      v-for="(project, index) in projects"
      :key="'web-project-' + index"
      :project="project"
      :index="index"
      :project-count="projects.length - 1"
    />
  </div>
</template>

<script>
import WebProject from "../../components/WebProject.vue";

/** 
 * name - name of web project
 * description - description of web project
 * cloudinaryID - path to image on cloudinary
 * alt - alt text for image
 * href - link to web project
 * analytics - object containing utm source, medium, and campaign info
 * tagline - caption which will appear below the image
 * customCursor - indicates if a custom cursor will appear or a pointer
 * cursorStyle - CSS rule for cursor
*/

const projects = [{
  name: "Cuckoo and the Birds Website",
  description: "A website I made for my band, Cuckoo and the Birds, where you can find all our info, social media links, and press. <br><br> If you're interested to listen, please consider supporting our music by streaming our EP, Twin Stars, on <a href='https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD'>Spotify</a>. <br><br> Built mobile-first with Nuxt, Tailwind, and a (mostly) healthy dose of rock 'n' roll 🤘",
  cloudinaryID: "screenshots/v2/cuckoo-mobile.png",  
  alt: "Image of Cuckoo and the Birds Website",
  href: "https://www.cuckooandthebirds.com",
  analytics: {
    source: "portfolio",
    medium: "web",
    campaign: "portfolio"
  },
  tagline: "Give our music a listen",
  emoji: "🎵",
  customCursor: false,
  cursorStyle: "pointer"
}, {
  name: "Road Ranger",
  description: "A navigation header that I built while freelancing for <a href='https://trekk.com' rel='noreferrer' target='_blank'>Trekk</a>. <br><br> Both the mobile and desktop versions are based on designs their web designers prepared for the client and had me implement. Built with SCSS, JavaScript, and PHP.",
  cloudinaryID: "screenshots/v2/roadranger-desktop.png",
  alt: "Image of Road Ranger Banner",
  href: "https://www.roadrangerusa.com",
  analytics: null,
  tagline: "Check it out!",
  emoji: "⛽",
  customCursor: false,
  cursorStyle: "pointer",
}, {
  name: "Space Clones",
  description: "An original space shooting video game inspired by Space Invaders, the 1978 arcade classic. Defeat the clone army and then their mothership to advance to the next level. <br><br> If you get a high enough score, you can earn extra lives. Play solo, or take turns with a friend. The galaxy is yours to save from the invading clone army! Created using HTML5, CSS3, JavaScript, and jQuery.",
  cloudinaryID: "screenshots/v2/space-clones-game.png",
  alt: "Image of Space Clones Title Screen",
  href: "https://space-clones.netlify.com",
  analytics: null,
  tagline: "See if you can beat my high score!",
  emoji: "😉",
  customCursor: true,
  cursorStyle: "url(images/space-clones-cursor.png), pointer",
// }, {
//   name: "BigSearch",
//   description: "An application inspired by the movie Big that interacts with the Open Movie Database (OMDB) REST API to return data about any movie, similar to the website, IMDB. <br><br> Built using React and React Router, hosted on Heroku. To use the app, simply type the name of any movie into the search form.",
//   cloudinaryID: "screenshots/big-search-screenshot.png",
//   alt: "Image of BigSearch app",
//   href: "https://bigsearch.herokuapp.com",
//   tagline: "Search your favorite movie!",
//   customCursor: false,
//   cursorStyle: "pointer",
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

<style>
</style>
