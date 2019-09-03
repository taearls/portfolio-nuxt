<template>
    <footer>
		<h6 v-html="message"></h6>
	</footer>
</template>

<script>
export default {
    computed: {
        message: function() {
            const year = new Date().getFullYear();
            return "&copy; Tyler Earls " + year;
        }
    }
}
</script>

<style scoped>
    h6 {
        text-align: center;
    }
</style>