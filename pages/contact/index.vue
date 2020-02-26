<template>
  <section>
    <h1>Contact Tyler Earls</h1>
    <br>
    <form
      id="contact"
      class="vue-form"
      method="get"
      enctype="text/plain"
    >
      <fieldset>
        <div>
          <label
            class="label"
            for="contactSubject"
          >Subject: </label>
          <input
            id="contactSubject"
            v-model="subject.text"
            type="text"
            name="subject"
            required
            :maxlength="subject.maxlength"
            :placeholder="subject.placeholder"
          >
          <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
        </div>
        <div>
          <label
            class="label"
            for="contactMessage"
          >Message: </label>
          <textarea
            id="contactMessage"
            v-model="message.text"
            class="message"
            name="message"
            required
            :maxlength="message.maxlength"
            :placeholder="message.placeholder"
            :class="{'error-field': message.error}"
            @input="message.error = false;"
          />
          <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
        </div>

        <vue-recaptcha
          :key="shouldCompactRecaptcha"
          sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
          theme="dark"
          :size="shouldCompactRecaptcha ? 'compact' : 'normal'"
          :load-recaptcha-script="true"
          @verify="markRecaptchaVerified"
          @expired="resetRecaptcha"
        />

        <div style="margin: 0;">
          <error-message
            id="recaptcha-error"
            success-message="Thank you. I look forward to working with you!"
            :error-present="saveDisabled"
            :error-message="getErrorMessage()"
          />
          <a
            target="_blank"
            :href="generateMailToURL()"
            :class="{disabled: saveDisabled, 'hover': !saveDisabled && hoveringMessage}"
            @mouseover="hoveringMessage = !saveDisabled"
            @mouseleave="hoveringMessage = false;"
          >Send Message</a>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import ErrorMessage from "../../components/renderless/ErrorMessage.vue";

// constants i don't want watched in data object
const compactRecaptchaBreakPoint = 560;

export default {
  components: {
    VueRecaptcha,
    ErrorMessage,
  },
  data() {
    return {
      recaptchaVerified: false,
      shouldCompactRecaptcha: false,
      hoveringMessage: false,
      errorLines: 0,
      message: {
        placeholder:
                    "Hey Tyler,\n\nMy name is _______.\nLet's build something awesome together.",
        text: "",
        maxlength: 500,
        error: false,
      },
      subject: {
        placeholder: "Freelance Hire Inquiry",
        text: "",
        maxlength: 50,
      },
    };
  },
  computed: {
    saveDisabled() {
      return this.message.text.length === 0 || !this.recaptchaVerified;
    },
  },
  mounted() {
    // check on initial mount, add event listener to recheck when window resized
    this.checkCompactRecaptcha();
    window.addEventListener("resize", this.checkCompactRecaptcha);
  },
  destroyed() {
    // remove resize event listener, remove stale recaptcha container
    window.removeEventListener("resize", this.checkCompactRecaptcha);
    this.removeRecaptchaContainer();
  },
  methods: {
    removeRecaptchaContainer() {
      // grab the container that is appended to the DOM from recaptcha script & remove it
      const { lastChild } = document.body;

      // make sure the last child is a div or an iframe before removing
      // so scripts don't get removed inadvertently
      if (/div|iframe/i.test(lastChild.nodeName)) {
        lastChild.remove();
      }
    },
    checkCompactRecaptcha() {
      const compare = this.shouldCompactRecaptcha;
      this.shouldCompactRecaptcha = window.innerWidth <= compactRecaptchaBreakPoint;

      const isRecaptchaRedrawn = compare !== this.shouldCompactRecaptcha;
      if (isRecaptchaRedrawn) {
        this.removeRecaptchaContainer();
      }
    },
    getErrorMessage() {
      if (!this.recaptchaVerified) {
        return "Please verify that you're a human before sending.";
      } if (this.recaptchaVerified && this.message.text.length === 0) {
        this.message.error = true;
        return "Message cannot be blank.";
      }
      return "Sorry about that. Please try again.";
    },
    markRecaptchaVerified() {
      this.recaptchaVerified = true;
    },
    resetRecaptcha() {
      this.recaptchaVerified = false;
    },
    generateMailToURL() {
      if (this.saveDisabled) return false;

      let mailToURL = "mailto:tyler.a.earls@gmail.com";
      mailToURL += `?body=${encodeURIComponent(this.message.text)}`; // add body
      if (this.subject.text.length > 0) {
        mailToURL += `&subject=${encodeURIComponent(this.subject.text)}`; // add subject if needed
      }
      return mailToURL;
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/global.scss';

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
        padding-left: 0;
        padding-right: 0;
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
    input[type="text"]:focus, textarea:focus {
        outline-width: 4px;
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
