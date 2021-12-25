# Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/706f9494-d6d6-4a4e-a336-d01fdcf8e2b4/deploy-status)](https://app.netlify.com/sites/tylerearls/deploys)

This repository is the source code for my personal [website](https://www.tylerearls.com) where you can learn more about me, my professional programming portfolio, and my [band](https://www.cuckooandthebirds.com).

You also can keep up to date with my current software projects.

If you're interested, I've also attached links to listen to my [music](https://cuckooandthebirds.bandcamp.com).

There's also a contact form on the website which uses a Node.js microservice I set up to handle sending an email based on the information provided in the form. It's protected by an OAuth2 API on the server side and a recaptcha widget on the web client. Please feel free to reach out if you want to say hi or to collaborate on a project!

## About the Site

The website is built mobile-first with Nuxt and TailwindCSS, and uses Cloudinary to serve optimized images. It's got a dark mode and light mode available, and it will default to your system preferences, or remember your preferred theme based on a cookie.

I also make use of Firebase to lighten the client-side payload, and to help optimize the server-side rendering provided by Nuxt.

As a matter of principle, I don't track your personal information, and I don't make use of any Amazon web services.