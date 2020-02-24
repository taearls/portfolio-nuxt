<template>
  <section id="home">
    <br>
    <h1>
      Hi there!
      <br>
      I'm Tyler Earls.
      <br>
      I am a software engineer and musician.
    </h1>
    <br>
    <p>
      I work at <a
        href="https://www.ensighten.com"
        rel="noreferrer"
        target="_blank"
      >Ensighten</a>, where I help provide client-side security and privacy law compliance for Fortune 500 companies. I enjoy the continuously evolving challenge of making the web safe for online users and their personal data.
    </p>
    <br>
    <p>
      Occasionally, I do freelance frontend work on the side. I love to build UI components that people interact with on the web.
    </p>
    <br>
    <p>
      Outside of tech, I write songs as Cuckoo and the Birds. You can listen to my music <a
        href="https://cuckooandthebirds.bandcamp.com"
        rel="noreferrer"
        target="_blank"
      >here.</a>
    </p>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "~/assets/scss/global.scss";

#home {
	h1 {
		margin: 0 auto;
		max-width: 75vw;
		text-align: left;
	}
	p {
		padding: 0;
		margin: 0 auto;
		max-width: 75vw;
	}
}
</style>
