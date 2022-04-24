// DOCS: https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config

export default {
  target: "static",
  ssr: true,
  /////////////////////
  // PUBLIC ENV VARS //
  /////////////////////
  publicRuntimeConfig: {
    cloudinaryId: process.env["CLOUDINARY_ID"],
    recaptchaSitekey: process.env["RECAPTCHA_SITEKEY"],
  },
  // options to pass to webpack build config
  build: {
    // uncomment this to use webpack analyzer when running `npm run generate` in development
    // analyze: process.env["NODE_ENV"] !== "production" ? true : false,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-132274464-1",
      },
    ],
    "@nuxt/postcss8",
    "@nuxt/typescript-build",
  ],
  css: [
    "~/static/css/main.css",
  ],
  babel: {
    presets() {
      return [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            buildTarget: "server",
            corejs: { version: 3 },
          },
        ],
      ];
    },
  },
  plugins: [
    { src: "~/plugins/cloudinary.js", mode: "client" },
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/vue-composition-api.js" },
  ],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate: "Tyler Earls | Software Engineer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,shrink-to-fit=no",
      },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { name: "author", content: "Tyler Earls" },
      {
        hid: "description",
        name: "description",
        content:
          "Tyler Earls is a software engineer who works in Vue, React, JavaScript, Java, HTML, CSS, and Rust.",
      },
      {
        property: "og:description",
        content:
          "Tyler Earls is a software engineer who works in Vue, React, JavaScript, Java, HTML, CSS, and Rust.",
      },
      {
        property: "og:title",
        content: "Tyler Earls | Software Engineer",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.tylerearls.com",
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/taearls/image/upload/c_scale,w_450/v1605418591/teal-tyler-in-space.jpg",
      },
      {
        property: "og:image:alt",
        content: "Teal Tyler in Space",
      },
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, JQuery, Java, Rust, Vue, React, Node.js, Software Engineer, Web Development, SASS, SCSS, Less, Responsive Design",
      },
    ],
    link: [
      {
        href: "images/vulcan-salute.ico",
        rel: "icon",
      },
    ],
    noscript: [
      {
        innerHTML:
          "<strong>We're sorry but this website doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>",
        body: true,
      },
    ],
    // scripts will not be url-encoded
    __dangerouslyDisableSanitizers: ["script"],
    router: {
      linkActiveClass: "active-link",
    },
    script: [
      {
        src: "js/cookieInit.js",
      },
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
    ],
  },
};
