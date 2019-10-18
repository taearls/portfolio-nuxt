<template>
    <section>
        <form href="#" id="contact" class="vue-form" method="get" enctype="text/plain" target="_blank" :action="generateMailToURL()">
            <h2>Contact Tyler Earls</h2>
            <fieldset>
                <div>
                    <label class="label" for="contactSubject">Subject: </label>
                    <input type="text" name="subject" id="contactSubject" required="" :maxlength="subject.maxlength" v-model="subject.text">
                    <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
                </div>
                <div>
                    <label class="label" for="contactMessage">Message: </label>
                    <textarea class="message" name="message" id="contactMessage" required="" 
                            v-model="message.text" 
                            :maxlength="message.maxlength"></textarea>
                    <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
                </div>

                <!-- TODO: see if the size attribute can be dynamically changed -->
                <!-- <template v-if="shouldCompactRecaptcha">
                    <vue-recaptcha 
                        sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
                        theme="dark"
                        size="compact"
                        @verify="markRecaptchaVerified"
                        @expired="resetRecaptcha"></vue-recaptcha>
                </template>
                <template v-else>
                    <vue-recaptcha 
                        sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
                        theme="dark"
                        size="normal"
                        @verify="markRecaptchaVerified"
                        @expired="resetRecaptcha"></vue-recaptcha>
                </template> -->
                
                <div style="margin: 0;">
                    <!-- <error-message
                        id="recaptcha-error"
                        successMessage="Thank you. I look forward to working with you!"
                        :errorPresent="saveDisabled"
                        :errorMessage="getErrorMessage()"></error-message> -->
                    <!-- <input type="submit" value="Send Message"
                        :disabled="saveDisabled"
                        @mouseover="handleHoverMessage();"
                        @mouseleave="hoveringMessage = false;"
                        :class="{disabled: saveDisabled, 'hover': !saveDisabled && hoveringMessage}"/> -->
                    <input type="submit" value="Send Message"
                        @mouseover="handleHoverMessage();"
                        @mouseleave="hoveringMessage = false;"
                        :class="{hover: hoveringMessage}"/>
                </div>
            </fieldset>
        </form>
    </section>
</template>

<script>
// import VueRecaptcha from 'vue-recaptcha';
// import ErrorMessage from '@/components/renderless/ErrorMessage.vue';

export default {
    data() {
        return {
            recaptchaVerified: false,
            hoveringMessage: false,
            errorLines: 0,
            message: {
                text: `Hey Tyler,\n\nMy name is _______.\nI'd love to discuss hiring you to help build my project.`,
                maxlength: 500
            },
            subject: {
                text: "Freelance Hire Inquiry",
                maxlength: 50
            }
        }
    },
    // components: {
    //     VueRecaptcha,
    //     ErrorMessage
    // },
    computed: {
        saveDisabled: function() {
            return this.message.text.length == 0 || !this.recaptchaVerified;
        },
        shouldCompactRecaptcha: function() {
            return window.innerWidth <= 525;
        },
    },
    methods: {
        handleHoverMessage: function() {
            // if (!this.saveDisabled) {
                this.hoveringMessage = true;
            // }
        },
        getErrorMessage: function() {
            if (!this.recaptchaVerified) {
                return "Please verify that you're a human before sending.";
            } else if (this.recaptchaVerified && this.message.text.length === 0) {
                return "Message cannot be blank.";
            }
            return "Sorry about that. Please try again.";
        },
        markRecaptchaVerified: function() {
            this.recaptchaVerified = true;
        },
        resetRecaptcha: function() {
            this.recaptchaVerified = false;
        },
        generateMailToURL: function() {
            var mailToURL = "mailto:tyler.a.earls@gmail.com";
            mailToURL += `?body=${encodeURIComponent(this.message.text)}`; // add body
            if (this.subject.text.length > 0) {
                mailToURL += `&amp;subject=${encodeURIComponent(this.subject.text)}`; // add subject if needed
            }
            return mailToURL;
        },
    }
}
</script>

<style lang="scss">
@import 'src/scss/global.scss';
h2 {
    font-weight: bold;
}
form {
    display: block;
    appearance: none;
    // max-width: calc(100vw - #{$largeNav} - 40px);
}
fieldset {
    border: none;
    div {
        margin-bottom: 25px;
    }
}
input {
    font-size: 12px;
}
.hover {
    color: $red !important;
    transition: 0.2s ease;
}
.vue-form {
    box-sizing: border-box;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 4px;
    margin: 20px auto;
    background-color: $black;
    opacity: 0.9;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);

    * {
        box-sizing: border-box;
    }

    input[type="text"],
    input[type="email"],
    textarea,
    select {
        padding: 12px;
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
        max-width: 60vw;
    }
    fieldset {
        margin: 24px 0 0 0;
    }
    legend {
        font-size: 26px;
        text-align: center;
        padding-bottom: 10px;
    }
    div {
        position: relative;
    }
    h4,
    .label {
        color: $red;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .label {
        display: inline-block;
    }
    input,
    textarea,
    select,
    label {
        color: #2b3e51;
    }
    input[type="text"],
    input[type="email"],
    textarea,
    select,
    legend {
        display: block;
        padding: 0;
        width: 100%;
        appearance: none;
    }
    input[type="text"],
    input[type="email"],
    textarea,
    select {
        padding: 12px;
        border  : 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }
    textarea {
        font-size: 13px;
        line-height: 1.4;
        min-height: 120px;
        resize: vertical;
        overflow: auto;
    }
    input[type="submit"] {
        border: 1px solid $gray;
        background: $lightblack;
        border-radius: 0.25em;
        padding: 12px 20px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
    }
    .no-touch input[type="submit"]:hover {
        background: $lightblue;
    }
    input[type="submit"]:active {
        transform: scale(0.9);
    }
    input[type="text"]:focus {
        outline-width: 7px;
    }
    .counter {
        color: $red;
        font-weight: bold;
        position: absolute;
        left: 0;
        font-size: 11px;
        margin-top: 5px;
    }
}
#recaptcha-error .error-message {
    overflow-wrap: break-word;
}
@media (max-width: $M) {
    #recaptcha-error .error-message {
        margin-bottom: 20px;
    }
    .vue-form {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>