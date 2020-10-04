import { join } from "path";

export default {
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    cookie: {
      key: "tylerearls.com-color-scheme",
      options: {
        sameSite: "lax", // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      },
    },
  },
  env: {
    CLOUDINARY_ID: process.env.CLOUDINARY_ID,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  mode: "universal",
  babel: {
    presets({ isServer }) {
      return [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            buildTarget: isServer ? "server" : "client",
            corejs: { version: 2 },
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
  purgeCSS: {
    whitelist: ["dark-mode"],
  },
  tailwindcss: {
    exposeConfig: true,
  },
  plugins: [
    "~/plugins/cloudinary.js",
    "~/plugins/firebase.js",
  ],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate: "Tyler Earls | Software Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,shrink-to-fit=no" },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: "description",
        name: "description",
        content:
          "Tyler Earls is a software engineer who works in Java, ES8+ JavaScript, and JavaScript frameworks.",
      },
      { name: "author", content: "Tyler Earls" },
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, JQuery, Java, Vue, React, Node.js, Software Engineer, Web Development, SASS, SCSS, Less, Responsive Design",
      },
    ],
    link: [
      // {
      //   href: "https://fonts.googleapis.com/css?family=Asul:400,600,700,800&display=swap",
      //   rel: "preload",
      //   as: "style",
      //   onload: "this.onload = null; this.rel = 'stylesheet';",
      // },
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
