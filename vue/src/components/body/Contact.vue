<template>
    <section>
        <form href="#" id="contact" class="vue-form" method="GET" target="_blank" :action="generateMailToURL()">
            <h2>Contact Tyler Earls</h2>
            <fieldset>
                <div>
                    <label class="label" for="subject">Subject: </label>
                    <input type="text" name="subject" id="name" required="" :maxlength="subject.maxlength" v-model="subject.text">
                    <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
                </div>
                <div>
                    <label class="label" for="message">Message: </label>
                    <textarea class="message" name="body" id="textarea" required="" 
                            v-model="message.text" 
                            :maxlength="message.maxlength"></textarea>
                    <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
                </div>
                <vue-recaptcha 
                    sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
                    theme="dark"
                    style="margin-bottom: 10px;"
                    :loadRecaptchaScript="true"
                    @verify="markRecaptchaVerified"
                    @expired="resetRecaptcha"></vue-recaptcha>
                
                <div style="margin: 0;">
                    <error-message
                        successMessage="Thank you. I look forward to working with you!"
                        :errorPresent="saveDisabled"
                        :errorMessage="getErrorMessage()"></error-message>
                    <input type="submit" value="Send Message"
                        :disabled="saveDisabled" 
                        :class="{disabled: saveDisabled}"/>
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
    components: {
        VueRecaptcha,
        ErrorMessage
    },
    computed: {
        saveDisabled: function() {
            return this.message.text.length == 0 || !this.recaptchaVerified;
        },
    },
    methods: {
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

<style lang="scss" scoped>
    @import 'src/scss/global.scss';
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
    .vue-form {
        box-sizing: border-box;
        font-size: 16px;
        padding: 15px 30px;
        border-radius: 4px;
        margin: 20px auto;
        width: 75vw;
        max-width: calc(100vw - #{$navWidth} - 40px);
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
        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: #2c3e50;
            box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
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
        input[type="submit"]:focus {
            outline: none;
            background: #2b3e51;
        }
        input[type="submit"]:active {
            transform: scale(0.9);
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
</style>