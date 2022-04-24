export const state = () => ({
  prefersDarkMode: false,
  webProjects: [
    {
      alt: "Image of Cuckoo and the Birds Website",
      analytics: {
        campaign: "portfolio",
        medium: "web",
        source: "portfolio",
      },
      cloudinaryID: "screenshots/v2/cuckoo-mobile",
      cloudinarySrc:
        "https://res.cloudinary.com/taearls/image/upload/q_auto/v1/screenshots/v2/cuckoo-mobile.png",
      cursorStyle: "pointer",
      descriptions: [
        "A website I made for my band, Cuckoo and the Birds, where you can find all our info, social media links, and press.",
        "If you're interested to listen, please consider supporting our music by streaming our EP, Twin Stars, on <a class='inline-anchor' href='https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD'>Spotify</a>.",
        "Built mobile-first with Nuxt, Tailwind, and a (mostly) healthy dose of rock 'n' roll 🤘",
        "Once we're able to play shows again, I'll be posting those updates on that site.",
      ],
      emoji: "🎵",
      href: "https://www.cuckooandthebirds.com",
      index: 0,
      isActive: true,
      name: "Cuckoo and the Birds Website",
      tagline: "Give our music a listen!",
    },
    {
      alt: "Image of Road Ranger Banner",
      analytics: null,
      cloudinaryID: "screenshots/v2/roadranger-desktop",
      cloudinarySrc:
        "https://res.cloudinary.com/taearls/image/upload/q_auto/v1/screenshots/v2/roadranger-desktop.png",
      cursorStyle: "pointer",
      descriptions: [
        "A navigation header that I built while freelancing for <a class='inline-anchor' href='https://trekk.com' rel='noreferrer' target='_blank'>Trekk</a>.",
        "Both the mobile and desktop versions are based on designs their web designers prepared for the client and had me implement. Built with SCSS, JavaScript, and PHP.",
      ],
      emoji: "⛽",
      index: 1,
      isActive: true,
      name: "Road Ranger",
      tagline: "Check it out!",
    },
    {
      alt: "Image of Space Clones Title Screen",
      analytics: null,
      cloudinaryID: "screenshots/v2/space-clones-game",
      cloudinarySrc:
        "https://res.cloudinary.com/taearls/image/upload/q_auto/v1/screenshots/v2/space-clones-game.png",
      cursorStyle: "url(images/space-clones-cursor.png), pointer",
      descriptions: [
        "An original space shooting video game inspired by Space Invaders, the 1978 arcade classic. Defeat the clone army and then their mothership to advance to the next level.",

        "If you get a high enough score, you can earn extra lives. Play solo, or take turns with a friend. The galaxy is yours to save from the invading clone army! Created using HTML5, CSS3, JavaScript, and jQuery.",
      ],

      emoji: "😉",
      href: "https://space-clones.netlify.com",
      index: 2,
      isActive: true,
      name: "Space Clones",
      tagline: "Beat my high score!",
    },
    // {
    //   alt: "Image of BigSearch app",
    //   analytics: null,
    //   cloudinaryID: "screenshots/big-search-screenshot",
    //   cloudinarySrc:
    //     "http://res.cloudinary.com/taearls/image/upload/q_auto/v1/screenshots/big-search-screenshot.png",
    //   cursorStyle: "pointer",
    //   descriptions: [
    //     "An application inspired by the movie Big that interacts with the Open Movie Database (OMDB) REST API to return data about any movie, similar to the website, IMDB.",
    //     "Built using React and React Router, hosted on Heroku. To use the app, simply type the name of any movie into the search form.",
    //   ],
    //   href: "https://bigsearch.herokuapp.com",
    //   index: 3,
    //   isActive: false,
    //   name: "Big Search",
    //   tagline: "Search your favorite movie!",
    // },
  ],
  internalNavigationLinks: [
    {
      ariaLabel: "Visit Home Page",
      displayText: "Home",
      href: "/",
      index: 0,
      isActive: true,
    },
    {
      ariaLabel: "Visit Web Projects Page",
      displayText: "Web",
      href: "/web-projects",
      index: 1,
      isActive: true,
    },
    {
      ariaLabel: "Visit Contact Page",
      displayText: "Contact",
      href: "/contact",
      index: 2,
      isActive: true,
    },
  ],
  externalNavigationLinks: [
    {
      ariaLabel: "Listen to Tyler's music on Bandcamp",
      displayText: "Music",
      href: "https://cuckooandthebirds.bandcamp.com",
      index: 0,
      isActive: true,
    },
  ],
  socialMediaLinks: [
    {
      ariaLabel: "Go to Tyler's LinkedIn",
      href: "https://www.linkedin.com/in/tylerearls",
      icon: "linkedin",
      index: 0,
      isActive: true,
    },
    {
      ariaLabel: "Go to Tyler's Github",
      href: "https://www.github.com/taearls",
      icon: "github",
      index: 1,
      isActive: true,
    },
    {
      ariaLabel: "Go to Tyler's Twitter",
      href: "https://www.twitter.com/taearls",
      icon: "twitter",
      index: 2,
      isActive: true,
    },
    {
      ariaLabel: "Go to Tyler's Bandcamp",
      href: "https://cuckooandthebirds.bandcamp.com",
      icon: "bandcamp",
      index: 3,
      isActive: true,
    },
  ],
});

export const mutations = {
  toggleDarkMode(state) {
    state.prefersDarkMode = !state.prefersDarkMode;
  },
  setPrefersDarkMode(state, prefersDarkMode) {
    state.prefersDarkMode = prefersDarkMode;
  },
};

export const actions = {};

export const modules = () => {};
