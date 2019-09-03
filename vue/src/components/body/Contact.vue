<template>
    <section>
        <h1 href="#" id="contact">Contact</h1>
        <form class="vue-form" @submit.prevent="sendEmail">
            
            <!-- <div class="error-message"> -->
                <!-- <span class="error-message" v-show="!email.valid">Please enter a valid email address.</span> -->
            <!-- </div> -->
            <!-- <legend>Contact Tyler Earls</legend> -->

            <fieldset>
                <div :class="{'has-error': !name.valid}">
                    <label class="label" for="name">Name: </label>
                    <input type="text" name="name" id="name" required="" v-model="name.value" 
                    @blur="name.valid = name.value.length > 0 ? true: false;"
                    :class="{error: !name.valid}">
                    <span class="error-message" v-show="!name.valid">{{ name.validationErrorMessage }}</span>
                </div>
                <div :class="{'has-error': !email.valid}">
                    <label class="label" for="email">Email: </label>   
                    <input type="email" name="email" id="email"
                        :class="{ email, error: !email.valid }"
                        v-model="email.address">
                    <span class="error-message" v-show="!email.valid"> {{ email.validationErrorMessage }}</span>
                </div>
                <div>
                    <label class="label" for="name">Subject: </label>
                    <input type="text" name="name" id="name" required="" :maxlength="subject.maxlength" v-model="subject.text">
                    <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
                </div>

                <div>
                    <label class="label" for="textarea">Message: </label>
                    <textarea class="message" name="textarea" id="textarea" required="" 
                            v-model="message.text" 
                            :maxlength="message.maxlength"></textarea>
                    <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
                </div>
                <div>
                    <input type="submit" value="Send Message">
                </div>
            </fieldset>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            submitted: false,
            name: {
                value: "John Doe",
                valid: true,
                validationErrorMessage: ""
            },
            email: {
                address: "jo@hnd.oe",
                valid: true,
                validationErrorMessage: ""
            },
            message: {
                text: `Dear Mr. President,\n...`,
                maxlength: 255
            },
            subject: {
                text: "Subject",
                maxlength: 40
            }
        }
    },
    computed: {
        outboundEmail: function() {
            return {
                from: this.email.address,
                name: this.name.value,
                to: "tyler.a.earls@gmail.com",
                subject: this.subject.text,
                message: this.message.text
            };
        }
    },
    watch: {
        // watching nested property
        "email.address": function(emailAddress) {
            this.validateEmail(emailAddress);
        },
        "name.value": function(name) {
            this.validateName(name);
        }
    },
    methods: {
        validateEmail: function(emailAddress) {
            // email regex source: https://emailregex.com/
            var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            this.email.valid = emailRegExp.test(emailAddress);
            if (!this.email.valid) {
                this.email.validationErrorMessage = "Please enter a valid email address.";
            } else {
                this.email.validationErrorMessage = "";
            }
        },
        validateName: function(name) {
            var nameRegExp = /^[A-Z ]+$/i;
            if (name.length == 0) {
                this.name.valid = false;
                this.name.validationErrorMessage = "Name is required.";
            } else if (!nameRegExp.test(name)) {
                this.name.valid = false;
                this.name.validationErrorMessage = "Only letters are allowed.";
            } else {
                this.name.valid = true;
                this.name.validationErrorMessage = "";
            }
        },
        sendEmail: function() {
            console.log(this.outboundEmail);
            // send email over ajax
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'src/scss/global.scss';
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
    .vue-form {
        box-sizing: border-box;
        font-size: 16px;
        padding: 15px 30px;
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
        .select {
            position: relative;
        }
        .select::after {
        content: "";
            position: absolute;
            z-index: 1;
            right: 16px;
            top: 50%;
            margin-top: -8px;
            display: block;
            width: 16px;
            height: 16px;
            background: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpolygon%20fill%3D%22%232c3e50%22%20points%3D%220.9%2C5.5%203.1%2C3.4%208%2C8.3%2012.9%2C3.4%2015.1%2C5.5%208%2C12.6%20%09%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E")
                no-repeat center center;
            pointer-events: none;
        }
        select {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
            cursor: pointer;
        }
        select::-ms-expand {
            display: none;
        }
        .vue-form-list {
            margin-top: 16px;
        }
        .vue-form-list::after {
            clear: both;
        content: "";
            display: table;
        }
        .vue-form-list li {
            display: inline-block;
            position: relative;
            user-select: none;
            margin: 0 26px 16px 0;
            float: left;
        }
        input[type="radio"],
        input[type="checkbox"] {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            padding: 0;
            opacity: 0;
            z-index: 2;
        }
        input[type="radio"] + label,
        input[type="checkbox"] + label {
            padding-left: 24px;
        }
        input[type="radio"] + label::before,
        input[type="radio"] + label::after,
        input[type="checkbox"] + label::before,
        input[type="checkbox"] + label::after {
        content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -8px;
            width: 16px;
            height: 16px;
        }
        input[type="radio"] + label::before,
        input[type="checkbox"] + label::before {
            border: 1px solid #cfd9db;
            background: #ffffff;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
        }
        input[type="radio"] + label::before,
        input[type="radio"] + label::after {
            border-radius: 50%;
        }
        input[type="checkbox"] + label::before,
        input[type="checkbox"] + label::after {
            border-radius: 0.25em;
        }
        input[type="radio"] + label::after,
        input[type="checkbox"] + label::after {
            background-color: #2c3e50;
            background-position: center center;
            background-repeat: no-repeat;
            box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
            display: none;
        }
        input[type="radio"] + label::after {
            background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Ccircle%20fill%3D%22%23FFFFFF%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%0D%0A%3C%2Fsvg%3E");
        }
        input[type="checkbox"] + label::after {
            background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20points%3D%225%2C8%207%2C10%2011%2C6%20%22%2F%3E%0D%0A%3C%2Fsvg%3E");
        }
        input[type="radio"]:focus + label::before,
        input[type="checkbox"]:focus + label::before {
            box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
        }
        input[type="radio"]:checked + label::after,
        input[type="checkbox"]:checked + label::after {
            display: block;
        }
        input[type="radio"]:checked + label::before,
        input[type="radio"]:checked + label::after,
        input[type="checkbox"]:checked + label::before,
        input[type="checkbox"]:checked + label::after {
            animation: cd-bounce 0.3s;
        }
        textarea {
            min-height: 120px;
            resize: vertical;
            overflow: auto;
        }
        input[type="submit"] {
            border: none;
            background: #2c3e50;
            border-radius: 0.25em;
            padding: 12px 20px;
            color: $red;
            font-weight: bold;
            float: right;
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
        .error-message {
            display: block;
            font-weight: 400;
            color: $red;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            border-radius: 0.25em;
            width: fit-content;
            font-size: 13px;
            height: 0px;
            margin-bottom: -2px;
            font-weight: 400;
        }
        .error {
            border-color: $red !important;
            border-width: 2px !important;
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