import { join } from "path";
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
  // necessary for `@nuxtjs/color-mode` module to hook into tailwind's dark mode
  colorMode: {
    classSuffix: "",
  },
  // options to pass to webpack build config
  build: {
    // uncomment this to use webpack analyzer when running `npm run generate` in development
    // analyze: process.env["NODE_ENV"] !== "production" ? true : false,
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
    "@nuxtjs/firebase",
    "@nuxtjs/tailwindcss",
  ],
  firebase: {
    config: {
      apiKey: process.env["FIREBASE_API_KEY"],
      appId: process.env["FIREBASE_APP_ID"],
      authDomain: process.env["FIREBASE_AUTH_DOMAIN"],
      databaseURL: process.env["FIREBASE_DB_URL"],
      measurementId: process.env["FIREBASE_MEASUREMENT_ID"],
      messagingSenderId: process.env["FIREBASE_MESSAGING_SENDER_ID"],
      projectId: process.env["FIREBASE_PROJECT_ID"],
      storageBucket: process.env["FIREBASE_STORAGE_BUCKET"],
    },
    services: {
      firestore: true,
    },
  },
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
    // register tailwind as plugin in postcss processing with associated config file
    plugins: {
      tailwindcss: join(__dirname, "tailwind.config.js"),
    },
  },
  plugins: [
    { src: "~/plugins/cloudinary.js", mode: "client" },
    { src: "~/plugins/cookieInit.js", mode: "client" },
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/vue-composition-api.js" },
  ],
  // fixes this issue where firestore doesn't terminate 
  // https://github.com/nuxt-community/firebase-module/issues/93
  hooks: {
    generate: {
      async done(builder) {
        const appModule = await import("./.nuxt/firebase/app.js");
        const { session } = await appModule.default(
          builder.options.firebase.config,
          {
            res: null,
          }
        );
        try {
          session.firestore().terminate();
        } catch (e) {
          console.log(e);
        }
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
