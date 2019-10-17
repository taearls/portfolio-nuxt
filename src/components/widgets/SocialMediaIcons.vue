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
    .social-link {
        margin-left: 5px;
    }
}

.social-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.social-link {
    color: white;
    height: 38px;
    width: 38px;
    &:hover {
        color: white;
    }
    span {
        background-color: $red;
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
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:hover {
            background-color: $lightblue;
            transition: background-color 0.2s ease;
        }
    }
}
</style>