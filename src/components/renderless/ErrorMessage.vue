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

.error-placeholder, .error-message {
    display: block;
    // height: 20px;
}
.success-message {
    font-weight: 400;
    color: $red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13px;
    width: fit-content;
}
.error-message {
    font-weight: 400;
    color: $red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 0.25em;
    width: fit-content;
    font-size: 13px;
    margin-left: initial;
    margin-right: initial;
    margin-top: -5px;
    margin-bottom: 10px;
    font-weight: 400;
}


</style>