import { join } from "path";
import { fireStore } from "./plugins/firebase";

export default {
  target: "static",
  ssr: true,
  // TODO: figure out how to implement privateRunTimeConfig
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  env: {
    CLOUDINARY_ID: process.env.CLOUDINARY_ID,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  colorMode: {
    classSuffix: "",
  },
  build: {
    // allows webpack analyzer to run when doing npm run generate in development
    // analyze: process.env.NODE_ENV !== "production" ? true : false,
    extractCSS: true,
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-132274464-1",
      },
    ],
    "@nuxt/typescript-build",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
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
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, "tailwind.config.js"),
    },
    preset: {
      stage: 2,
    },
  },
  plugins: [
    { src: "~/plugins/cloudinary.js" },
    { src: "~/plugins/firebase.js", mode: "server" },
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/cookieInit.js", mode: "client" },
    { src: "~/plugins/vue-composition-api.js" },
  ],
  hooks: {
    generate: {
      done() {
        // prevents warning when running nuxt generate command
        // https://github.com/nuxt-community/firebase-module/issues/93
        fireStore.terminate();
      },
    },
  },
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
