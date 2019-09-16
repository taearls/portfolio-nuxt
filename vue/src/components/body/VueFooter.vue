<template>
    <footer>
		<h6 v-html="footerText"></h6>
	</footer>
</template>

<script>
export default {
    computed: {
        footerText: function() {
            const year = new Date().getFullYear();
            return "&copy; Tyler Earls " + year;
        }
    }
}
</script>

<style lang="scss" scoped>

h6 {
    text-align: center;
}
</style>