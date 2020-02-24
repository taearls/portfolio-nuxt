export default {
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? "server" : "client",
              corejs: { version: 2 },
            },
          ],
        ];
      },
    },
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/,
    //     });
    //   }
    // },
  },
  head: {
    titleTemplate: "Tyler Earls - Software Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,shrink-to-fit=no" },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Tyler Earls is a software engineer who works in Java, ES8+ JavaScript, and JavaScript frameworks." },
      { name: "author", content: "Tyler Earls" },
      { name: "keywords", content: "HTML, CSS, JavaScript, JQuery, Java, Vue, React, Node.js, Software Engineer, Web Development, SASS, SCSS, Less, Responsive Design" },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Asul:400,700|Roboto:400,700&display=swap", rel: "preload", as: "style", onload: "this.onload = null; this.rel = 'stylesheet'",
      },
      { href: "./assets/images/vulcan-salute.ico", rel: "icon" },
    ],
    noscript: [
      { innerHTML: "<strong>We're sorry but this website doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>", body: true },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "http://schema.org/",
          "@type": "Person",
          name: "Tyler Earls",
          jobTitle: "Software Engineer",
          email: "tyler.a.earls@gmail.com",
          url: "https://www.tylerearls.com",
        }),
      },
      { src: "./assets/scripts/googleTagManagerInit.js", type: "text/javascript" },
      { src: "https://kit.fontawesome.com/aba278b901.js", async: true, defer: true },
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-132274464-1", async: true, defer: true },
    ],
  },
  plugins: ["~/plugins/global.js"],
};
