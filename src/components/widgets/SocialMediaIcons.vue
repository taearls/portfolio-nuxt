<template>
    <div class="social-container">
        <a class="social-link" rel="noreferrer" href="https://www.linkedin.com/in/tylerearls" target="_blank" aria-label="Go to Tyler's LinkedIn">
            <span>
                <i class="fab fa-linkedin"></i>
            </span>
        </a>
        <a class="social-link" rel="noreferrer" href="https://www.github.com/tboneearls" target="_blank" aria-label="Go to Tyler's Github">
            <span>
                <i class="fab fa-github"></i>
            </span>
        </a>
        <a class="social-link" rel="noreferrer" href="https://www.twitter.com/taearls" target="_blank" aria-label="Go to Tyler's Twitter">
            <span>
                <i class="fab fa-twitter"></i>
            </span>
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import 'src/scss/global.scss';

nav .social-container {
    position: absolute;
    bottom: 70px;
    left: 32px;
    margin: 0;
}

.social-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.social-link {
    margin: 5px 0;
    span {
        color: $red;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: .35rem .7rem;
        font-size: 1.5rem;
        line-height: 1.5;
        border-radius: .25rem;
        &:hover {
            color: $lightblue;
            transition: all 0.2s ease;
        }
    }
}

</style>