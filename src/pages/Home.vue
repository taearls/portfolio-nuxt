<template>
	<section id="home">
		<!-- <h2>Tyler Earls</h2>
        <h3>Software Engineer</h3>
        <img id="headshot" alt="Tyler Earls Headshot" src="assets/headshot.jpg" /> -->
		<br>
		<h1>Hi there! 
			<br>
			I'm Tyler Earls. 
			<br>
			I am a software engineer and musician.	
		</h1>
			<br/>
			<p> 
				Currently, I work at <a href="https://www.ensighten.com" rel="noreferrer" target="_blank">Ensighten</a>, where I help provide client-side security for Fortune 500 companies that protects the PII of their end users.
			</p>
			<br/>
			<p>
				Occasionally, I also do freelance frontend work on the side. I love to build UI components that people interact with.
			</p>
			<br/>
			<!-- <p> 
				I write songs as Cuckoo and the Birds. You can listen to my music <a>here.</a>
			</p> -->
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "src/scss/global.scss";

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