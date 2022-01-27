# Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/706f9494-d6d6-4a4e-a336-d01fdcf8e2b4/deploy-status)](https://app.netlify.com/sites/tylerearls/deploys)

This repository is the source code for my personal [website](https://www.tylerearls.com), where you can learn more about me, my professional programming portfolio, and my [band](https://www.cuckooandthebirds.com). You also can keep up to date with my personal software projects.

If you're interested, I've attached links where you can listen to my [music](https://cuckooandthebirds.bandcamp.com).

Please feel free to reach out if you want to say hi or to collaborate on a software project!

## About the Site

The website is built mobile-first with Nuxt and TailwindCSS, and uses Cloudinary to serve optimized images. It's got a dark mode and light mode available, and it will default to your system's preferences, or it will remember your preferred theme based on a cookie.

I use Firebase to lighten the client-side payload, and to help optimize the server-side rendering provided by Nuxt.

There's a contact form on the website, which uses a Node.js microservice that I set up to handle sending an email based on user information collected in the form. For security, it's protected by an OAuth2 API on the server side and a recaptcha widget on the web client. 

As a matter of principle, I don't track your personal information. I only use Google Analytics for web metrics, and I use cookies only to enrich the user experience.