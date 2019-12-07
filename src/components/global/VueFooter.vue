<template>
    <footer>
        <br/>
        <social-media-icons></social-media-icons>
		<h6 v-html="footerText"></h6>
	</footer>
</template>

<script>
import SocialMediaIcons from '@/components/widgets/SocialMediaIcons.vue';
export default {
    components: {
        SocialMediaIcons
    },
    computed: {
        footerText: function() {
            const year = new Date().getFullYear();
            return "&copy; Tyler Earls " + year;
        }
    },

}
</script>

<style lang="scss">

</style>