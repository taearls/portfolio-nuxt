<template>
    <section>
        <br/>
        <h1>Contact Tyler Earls</h1>
        <br/>
        <form id="contact" class="vue-form" method="get" enctype="text/plain">
            <fieldset>
                <div>
                    <label class="label" for="contactSubject">Subject: </label>
                    <input type="text" name="subject" id="contactSubject" required
                        :maxlength="subject.maxlength"
                        :placeholder="subject.placeholder"
                        v-model="subject.text">
                    <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
                </div>
                <div>
                    <label class="label" for="contactMessage">Message: </label>
                    <textarea class="message" name="message" id="contactMessage" required 
                        :maxlength="message.maxlength"
                        :placeholder="message.placeholder"
                        :class="{'error-field': message.error}"
                        @input="message.error = false;"
                        v-model="message.text"></textarea>
                    <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
                </div>
                
                <vue-recaptcha 
                    sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
                    theme="dark"
                    :size="shouldCompactRecaptcha ? 'compact' : 'normal'"
                    :key="shouldCompactRecaptcha"
                    @verify="markRecaptchaVerified"
                    @expired="resetRecaptcha"></vue-recaptcha>
                
                <div style="margin: 0;">
                    <error-message
                        id="recaptcha-error"
                        successMessage="Thank you. I look forward to working with you!"
                        :errorPresent="saveDisabled"
                        :errorMessage="getErrorMessage()"></error-message>
                    <a
                        target="_blank"
                        @mouseover="handleHoverMessage();"
                        @mouseleave="hoveringMessage = false;"
                        :href="generateMailToURL()"
                        :class="{disabled: saveDisabled, 'hover': !saveDisabled && hoveringMessage}">Send Message</a>
                </div>
            </fieldset>
        </form>
    </section>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import ErrorMessage from '@/components/renderless/ErrorMessage.vue';

export default {
    data() {
        return {
            recaptchaVerified: false,
            shouldCompactRecaptcha: false,
            compactRecaptchaBreakPoint: 560,
            hoveringMessage: false,
            errorLines: 0,
            message: {
                placeholder: 
                    `Hey Tyler,\n\nMy name is _______.\nLet's build something awesome together.`,
                text: "",
                maxlength: 500,
                error: false
            },
            subject: {
                placeholder: "Freelance Hire Inquiry",
                text: "",
                maxlength: 50
            }
        }
    },
    mounted() {
        this.checkCompactRecaptcha();
        window.addEventListener("resize", this.checkCompactRecaptcha);
    },
    destroyed() {
        window.removeEventListener("resize", this.checkCompactRecaptcha);
    },
    components: {
        VueRecaptcha,
        ErrorMessage
    },
    computed: {
        saveDisabled: function() {
            return this.message.text.length === 0 || !this.recaptchaVerified;
        },
    },
    methods: {
        checkCompactRecaptcha: function() {
            this.shouldCompactRecaptcha = window.innerWidth <= this.compactRecaptchaBreakPoint;
        },
        handleHoverMessage: function() {
            if (!this.saveDisabled) {
                this.hoveringMessage = true;
            }
        },
        getErrorMessage: function() {
            if (!this.recaptchaVerified) {
                return "Please verify that you're a human before sending.";
            } else if (this.recaptchaVerified && this.message.text.length === 0) {
                this.message.error = true;
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
            if (this.saveDisabled) return false;

            var mailToURL = "mailto:tyler.a.earls@gmail.com";
            mailToURL += `?body=${encodeURIComponent(this.message.text)}`; // add body
            if (this.subject.text.length > 0) {
                mailToURL += `&subject=${encodeURIComponent(this.subject.text)}`; // add subject if needed
            }
            return mailToURL;
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/global.scss';

.error-field {
    outline: 2px solid $red;
}
h2 {
    font-weight: bold;
}
form {
    display: block;
    appearance: none;
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
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 4px;
    margin: 20px auto;
    box-shadow: 1px 1px 6px 1px $black;
    border: 2px solid $red;
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
    input[type="submit"], a {
        border: 1px solid $gray;
        background: $lightblack;
        border-radius: 0.25em;
        padding: 12px 20px;
        font-size: 12px;
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
    .vue-form {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>