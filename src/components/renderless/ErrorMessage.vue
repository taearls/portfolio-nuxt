<template>
    <span>
        <span 
            v-if="!errorPresent"
            class="error-placeholder"
            :class="{'success-message': successMessage}">{{ successMessage || "" }}</span>
        <span 
            v-if="errorPresent"
            class="error-message">{{ errorMessage }}</span>
    </span>
</template>

<script>
export default {
    props: ['errorMessage', 'errorPresent', 'successMessage'],
}
</script>

<style scoped lang="scss">
@import 'src/scss/global.scss';

.error-placeholder, .error-message, .success-message {
    display: block;
    margin-left: initial;
    margin-right: initial;
    margin-bottom: 10px;
    margin-top: -5px;
    font-size: 13px; 
    font-weight: 400;
    color: $red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: fit-content;
}

</style>